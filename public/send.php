<?php
// Réponses JSON par défaut
header('Content-Type: application/json');

// Liste blanche d'origines autorisées (extensible)
$allowed_origins = ['https://etudeviale.fr','https://www.etudeviale.fr'];

// Toujours varier sur l'origine pour le cache des proxys/CDN
header('Vary: Origin');

// Déclarer les en-têtes CORS communs
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$origin = null;
$origin_allowed = false;
if (isset($_SERVER['HTTP_ORIGIN'])) {
    $origin = $_SERVER['HTTP_ORIGIN'];
    if (in_array($origin, $allowed_origins, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        $origin_allowed = true;
    } else {
        // Origine non autorisée
        error_log('send.php: origine refusée: ' . $origin . ' ip=' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
        http_response_code(403);
        echo json_encode(['status' => 'error', 'message' => 'Origin non autorisée']);
        exit;
    }
}

// Gérer la requête de prévol (OPTIONS)
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Si l'origine est définie mais non autorisée, on est déjà sorti avec 403 ci-dessus
    http_response_code(204);
    exit;
}

// Anti-spam: honeypot optionnel (champ masqué "hp" ou "honeypot")
if (!empty($_POST['hp']) || !empty($_POST['honeypot'])) {
    error_log('send.php: honeypot déclenché ip=' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . ' origin=' . ($origin ?? 'none'));
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Spam détecté']);
    exit;
}

// Rate limiting simple par IP: 5 requêtes / 10 minutes
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$now = time();
$window = 10 * 60; // 10 minutes
$limit = 5;
$rate_file = sys_get_temp_dir() . '/send_php_rate_' . preg_replace('/[^a-zA-Z0-9_\-.]/', '_', $ip) . '.json';
$history = [];
if (file_exists($rate_file)) {
    $raw = @file_get_contents($rate_file);
    if ($raw !== false) {
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) {
            $history = $decoded;
        }
    }
}
// Conserver uniquement les timestamps dans la fenêtre
$history = array_values(array_filter($history, function($t) use ($now, $window) {
    return is_int($t) && ($now - $t) < $window;
}));

if (count($history) >= $limit) {
    error_log('send.php: rate limit dépassé ip=' . $ip . ' origin=' . ($origin ?? 'none'));
    http_response_code(429);
    echo json_encode(['status' => 'error', 'message' => 'Trop de requêtes, veuillez réessayer plus tard']);
    exit;
}

// Enregistrer la tentative actuelle et persister
$history[] = $now;
@file_put_contents($rate_file, json_encode($history), LOCK_EX);

// N'accepter que POST pour le traitement métier
if (!isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] !== 'POST') {
    error_log('send.php: méthode non autorisée method=' . ($_SERVER['REQUEST_METHOD'] ?? 'unknown') . ' ip=' . $ip . ' origin=' . ($origin ?? 'none'));
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Méthode non autorisée']);
    exit;
}

// Récupération des champs
$name = $_POST['name'] ?? '';
$company = $_POST['company'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';
$email = 'vial.madagascar@gmail.com';

$to = 'vial.madagascar@gmail.com';
$email_subject = "Nouveau message de contact: $subject";

$email_body = "Vous avez reçu un nouveau message de votre formulaire de contact.\n\n" .
              "Détails :\n" .
              "Nom: $name\n" .
              "Entreprise: $company\n" .
              "Objet: $subject\n" .
              "Message:\n$message";

$headers = "From: noreply@etude-vial.mg\n";
$headers .= "Reply-To: $email";

if (@mail($to, $email_subject, $email_body, $headers)) {
    error_log('send.php: envoi OK ip=' . $ip . ' origin=' . ($origin ?? 'none') . ' subject=' . (strlen($subject) ? strlen($subject) : 0) . ' body=' . strlen($message));
    echo json_encode(['status' => 'success', 'message' => 'Message envoyé avec succès']);
} else {
    error_log('send.php: erreur envoi mail ip=' . $ip . ' origin=' . ($origin ?? 'none'));
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Une erreur est survenue lors de l\'envoi du message']);
}
?>
