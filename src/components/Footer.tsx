const Footer = () => {
  return (
    <footer className="w-full border-t border-outline-variant">
      <div className="max-w-container-max mx-auto py-section-gap px-margin-edge flex flex-col md:flex-row justify-between items-center gap-gutter">
        <div className="flex flex-col gap-8">
          <img src="/assets/images/logo.png" alt="Étude Viale" className="h-28 w-auto object-contain" />
          <p className="font-label-caps text-label-caps text-on-surface-variant/60 max-w-xs leading-relaxed">
            © 2024 Étude Viale. Bureau de conseil spécialisé en placement financier, immobilier et stratégie de développement.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-24 gap-y-8">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-tertiary mb-2">Navigation</span>
            <a className="font-label-caps text-label-caps text-on-surface-variant/60 hover:text-tertiary transition-opacity opacity-80 hover:opacity-100" href="#">Mentions Légales</a>
            <a className="font-label-caps text-label-caps text-on-surface-variant/60 hover:text-tertiary transition-opacity opacity-80 hover:opacity-100" href="#">Politique de Confidentialité</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-tertiary mb-2">Réseaux</span>
            <a className="font-label-caps text-label-caps text-on-surface-variant/60 hover:text-tertiary transition-opacity opacity-80 hover:opacity-100" href="#">LinkedIn</a>
            <a className="font-label-caps text-label-caps text-on-surface-variant/60 hover:text-tertiary transition-opacity opacity-80 hover:opacity-100" href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
