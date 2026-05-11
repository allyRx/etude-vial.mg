import { motion } from 'framer-motion'
import InternalLink from '../components/InternalLink'
import { ROUTES } from '../lib/routes'

const serviceSteps = [
  {
    number: '01',
    title: 'Immersion',
    text: 'Compréhension profonde de votre ADN d’activité et de vos enjeux spécifiques.',
  },
  {
    number: '02',
    title: 'Diagnostic',
    text: 'Analyse granulaire des données et identification des leviers de performance.',
  },
  {
    number: '03',
    title: 'Stratégie',
    text: "Élaboration d'une feuille de route architecturale vers vos objectifs.",
  },
  {
    number: '04',
    title: 'Exécution',
    text: 'Accompagnement opérationnel pour une mise en œuvre sans compromis.',
  },
]

const serviceCards = [
  {
    number: '01',
    icon: 'architecture',
    title: 'Écosystème de Marque Signature',
    text: 'Nous relions image, expérience et positionnement pour donner à votre activité une structure plus lisible et plus désirable.',
  },
  {
    number: '02',
    icon: 'analytics',
    title: 'Analyse Prédictive de la Demande',
    text: 'Nous lisons les tendances, les flux et les signaux faibles pour orienter vos arbitrages avec précision.',
  },
]

const ServicesPage = () => {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-5rem)] w-full flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-50"
            alt="A cinematic low-angle shot of a modern glass skyscraper reflecting a deep obsidian night sky."
            src="/assets/images/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/40 to-surface" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-edge w-full">
          <div className="text-center max-w-5xl mx-auto">
          <span className="font-label-caps text-label-caps text-tertiary tracking-[0.4em] block mb-8 opacity-80">
            LE PRESTIGE DU CONSEIL
          </span>
          <h1 className="font-serif text-display-lg md:text-display-xl text-on-surface leading-none mb-10 italic">
            L'Architecture de la Réussite
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Une précision chirurgicale dans la stratégie, une exécution sans faille pour les acteurs qui façonnent la performance durable.
          </p>
          <div className="mt-16 h-20 w-px bg-tertiary/40 mx-auto" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-edge grid grid-cols-1 md:grid-cols-2 items-center gap-gutter">
          <div className="order-2 md:order-1">
            <div className="max-w-xl mx-auto md:mx-0">
            <span className="font-label-caps text-label-caps text-tertiary mb-6 block">
              HOSPITALITY & RETAIL
            </span>
            <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-surface mb-8">
              Ingénierie de la Croissance
            </h2>
            <div className="h-px w-full bg-outline-variant/30 mb-8" />
            <p className="font-body-md text-body-md text-on-surface-variant mb-12">
              Nous transformons les destinations en héritages. Notre approche combine l’analyse, la structure et une compréhension intime de l’expérience client haut de gamme.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  architecture
                </span>
                <span className="font-body-md">Écosystème de Marque Signature</span>
              </li>
              <li className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  analytics
                </span>
                <span className="font-body-md">Analyse Prédictive de la Demande</span>
              </li>
            </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 relative group overflow-hidden min-h-[560px] w-full">
            <img
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              alt="A high-fashion editorial photograph showing a luxury retail interior with polished marble floors and minimalist brass fixtures."
              src="/assets/images/res.png"
            />
            <div className="absolute inset-0 bg-surface/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-section-gap overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.3]"
            alt="An abstract, low-exposure shot of a modern financial district at night."
            src="/assets/images/inte.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/10 via-surface/50 to-surface" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-edge w-full">
          <div className="glass-panel p-12 md:p-24 max-w-4xl border-l-2 border-tertiary">
            <span className="font-label-caps text-label-caps text-tertiary mb-6 block">
              STRATÉGIE DE HAUTE VOLÉE
            </span>
            <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-surface mb-10">
              Capital &amp; Stratégie Financière
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Sécuriser l’avenir demande une vision structurelle. Nous aidons à orienter les décisions de capital avec une logique longue durée, lisible et robuste.
            </p>
            <InternalLink
              to={ROUTES.contact}
              className="inline-flex border border-tertiary text-tertiary px-10 py-4 font-label-caps text-label-caps hover:bg-tertiary hover:text-on-tertiary transition-all duration-animation-duration-slow"
            >
              Demander une consultation
            </InternalLink>
          </div>
        </div>
      </section>

      <section className="bg-surface blueprint-grid py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-tertiary mb-6 block">
                SYSTÈMES & PERFORMANCE
              </span>
              <h2 className="font-display-lg text-headline-md text-on-surface">
                Optimisation Opérationnelle
              </h2>
            </div>
            <div className="md:text-right max-w-xl">
              <p className="font-body-md text-on-surface-variant italic">
                "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {serviceCards.map((card) => (
              <motion.article
                key={card.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-12 group hover:border-tertiary/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="font-display-lg text-tertiary/20 group-hover:text-tertiary/40 transition-colors leading-none">
                    {card.number}
                  </span>
                  <span className="material-symbols-outlined text-tertiary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">{card.title}</h3>
                <p className="text-on-surface-variant font-body-md mb-8">{card.text}</p>
                <div className="flex gap-2">
                  <div className="h-1 flex-1 bg-tertiary" />
                  <div className="h-1 flex-1 bg-outline-variant/30" />
                  <div className="h-1 flex-1 bg-outline-variant/30" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <div className="text-center mb-32">
            <span className="font-label-caps text-label-caps text-tertiary mb-6 block">NOTRE PROTOCOLE</span>
            <h2 className="font-display-lg text-headline-md text-on-surface">La Méthodologie Viale</h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {serviceSteps.map((step) => (
                <div key={step.number} className="group cursor-default">
                  <div className="bg-surface w-16 h-16 flex items-center justify-center border border-outline-variant group-hover:border-tertiary transition-colors mb-10 mx-auto md:mx-0 relative z-10">
                    <span className="font-label-caps text-tertiary">{step.number}</span>
                  </div>
                  <h4 className="font-headline-sm text-body-lg text-on-surface mb-4">{step.title}</h4>
                  <p className="text-on-surface-variant text-body-md">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-gap relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-tertiary/5 skew-x-12 translate-x-1/4" />
        <div className="max-w-container-max mx-auto px-margin-edge relative z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-12">Entrez dans le cercle</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-16">
              Nous sélectionnons nos partenaires avec la même exigence qu'ils appliquent à leurs métiers. Rejoignez un accompagnement pensé pour durer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <InternalLink
                to={ROUTES.contact}
                className="bg-tertiary text-on-tertiary px-16 py-6 font-label-caps text-label-caps hover:bg-tertiary-fixed-dim transition-all duration-animation-duration-slow shadow-2xl shadow-tertiary/10 uppercase tracking-widest"
              >
                Demander un Accès Privé
              </InternalLink>
              <InternalLink
                to={ROUTES.contact}
                className="border border-tertiary/30 text-tertiary px-10 py-6 font-label-caps text-label-caps hover:bg-tertiary/10 transition-all uppercase tracking-widest"
              >
                Découvrir le contact
              </InternalLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
