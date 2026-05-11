import InternalLink from '../components/InternalLink'
import { ROUTES } from '../lib/routes'

const NotFoundPage = () => {
  return (
    <main className="min-h-[60vh] flex items-center">
      <section className="max-w-container-max mx-auto px-margin-edge w-full py-section-gap">
        <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.3em] block mb-6">
          404
        </span>
        <h1 className="font-display-lg text-headline-md text-on-surface mb-6">
          Page introuvable
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
          Cette page n'existe pas ou a ete deplacee.
        </p>
        <InternalLink
          to={ROUTES.home}
          className="inline-flex items-center justify-center bg-tertiary px-8 py-4 font-label-caps text-label-caps text-on-tertiary uppercase tracking-widest"
        >
          Retour a l'accueil
        </InternalLink>
      </section>
    </main>
  )
}

export default NotFoundPage
