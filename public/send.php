<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $company = $_POST['company'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';
    $email = 'vial.madagascar@gmail.com'; 

    $to = "vial.madagascar@gmail.com";
    $email_subject = "Nouveau message de contact: $subject";
    
    $email_body = "Vous avez reçu un nouveau message de votre formulaire de contact.\n\n".
                  "Détails :\n".
                  "Nom: $name\n".
                  "Entreprise: $company\n".
                  "Objet: $subject\n".
                  "Message:\n$message";
    
    $headers = "From: noreply@etude-vial.mg\n";
    $headers .= "Reply-To: $email";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Message envoyé avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Une erreur est survenue lors de l\'envoi du message']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Méthode non autorisée']);
}
?>
