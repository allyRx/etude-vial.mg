import InternalLink from './InternalLink'
import { ROUTES } from '../lib/routes'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface py-20 border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-gutter">
          <div className="max-w-sm">
            <InternalLink to={ROUTES.home} className="inline-block mb-8">
              <img src="/assets/images/logo.png" alt="Étude Viale" className="h-20 md:h-28 w-auto object-contain" />
            </InternalLink>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Conseil stratégique et accompagnement de prestige pour les secteurs de l'hôtellerie, de la restauration et du commerce.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-10 md:gap-24">
            <div className="flex flex-col gap-6">
              <h4 className="font-label-caps text-on-surface uppercase text-sm tracking-widest">Navigation</h4>
              <nav className="flex flex-col gap-4">
                <InternalLink className="text-on-surface-variant hover:text-tertiary transition-colors text-sm" to={ROUTES.home}>Accueil</InternalLink>
                <InternalLink className="text-on-surface-variant hover:text-tertiary transition-colors text-sm" to="/#expertises">Expertises</InternalLink>
                <InternalLink className="text-on-surface-variant hover:text-tertiary transition-colors text-sm" to="/#services">Services</InternalLink>
                <InternalLink className="text-on-surface-variant hover:text-tertiary transition-colors text-sm" to={ROUTES.about}>À Propos</InternalLink>
                <InternalLink className="text-on-surface-variant hover:text-tertiary transition-colors text-sm" to={ROUTES.contact}>Contact</InternalLink>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-label-caps text-on-surface uppercase text-sm tracking-widest">Légal</h4>
              <nav className="flex flex-col gap-4">
                <InternalLink className="text-on-surface-variant hover:text-tertiary transition-colors text-sm" to="/mentions-legales">Mentions Légales</InternalLink>
                <InternalLink className="text-on-surface-variant hover:text-tertiary transition-colors text-sm" to="/confidentialite">Confidentialité</InternalLink>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant/60 text-xs uppercase tracking-widest">© {new Date().getFullYear()} Étude Viale. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="text-on-surface-variant/60 hover:text-tertiary transition-colors text-xs uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="text-on-surface-variant/60 hover:text-tertiary transition-colors text-xs uppercase tracking-widest">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
