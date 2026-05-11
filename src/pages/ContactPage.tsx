import { motion } from 'framer-motion'
import InternalLink from '../components/InternalLink'
import { ROUTES } from '../lib/routes'

const officeBlocks = [
  {
    city: 'Paris',
    address: '12 Avenue Montaigne, 75008',
    coords: '48.8661° N, 2.3065° E',
  },
  {
    city: 'London',
    address: '32 Mayfair Square, W1J',
    coords: '51.5095° N, 0.1472° W',
  },
  {
    city: 'Geneva',
    address: 'Quai du Mont-Blanc 7, 1201',
    coords: '46.2044° N, 6.1432° E',
  },
]

const ContactPage = () => {
  return (
    <main className="bg-surface text-on-surface">
      <div className="film-grain" />

      <section className="relative min-h-[716px] flex flex-col justify-center pt-20 border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="A cinematic architectural shot of a minimalist skyscraper reflecting a deep blue twilight sky."
            src="/assets/images/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-edge w-full">
          <div className="max-w-4xl text-center mx-auto">
            <span className="font-label-caps text-label-caps text-tertiary block mb-6 uppercase tracking-[0.4em]">
              Protocole d'Accès
            </span>
            <h1 className="font-display-lg text-display-lg mb-8 leading-none">
              Entrez dans la Confidentialité
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Nous orchestrons des solutions stratégiques pour les leaders d'exception. Chaque échange est traité avec la plus haute rigueur diplomatique et architecturale.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-edge py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-7">
          <div className="glass-panel p-12">
            <h2 className="font-display-lg text-headline-md mb-12">Demande de Consultation</h2>
            <form className="space-y-12">
              <div className="relative">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4 block">
                  Nom complet
                </label>
                <input
                  className="w-full bg-transparent input-underline py-4 font-body-lg text-body-lg text-on-surface placeholder:text-outline-variant/50 focus:ring-0"
                  placeholder="Veuillez décliner votre identité"
                  type="text"
                />
              </div>
              <div className="relative">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4 block">
                  Organisation
                </label>
                <input
                  className="w-full bg-transparent input-underline py-4 font-body-lg text-body-lg text-on-surface placeholder:text-outline-variant/50 focus:ring-0"
                  placeholder="Entité représentée"
                  type="text"
                />
              </div>
              <div className="relative">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4 block">
                  Nature du Projet
                </label>
                <textarea
                  className="w-full bg-transparent input-underline py-4 font-body-lg text-body-lg text-on-surface placeholder:text-outline-variant/50 focus:ring-0 resize-none"
                  placeholder="Brève description de vos impératifs stratégiques"
                  rows={4}
                />
              </div>
              <div className="pt-8">
                <InternalLink
                  to={ROUTES.contact}
                  className="group flex items-center gap-4 text-tertiary font-label-caps text-label-caps uppercase tracking-widest"
                >
                  Soumettre la requête
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </InternalLink>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-gutter">
          <div className="glass-panel p-8">
            <h3 className="font-label-caps text-label-caps text-tertiary mb-8 uppercase tracking-[0.2em]">
              Canaux Sécurisés
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
                  <span className="material-symbols-outlined">encrypted</span>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1">
                    Email ProtonMail
                  </p>
                  <p className="font-body-md text-body-md">viale.private@etudeviale.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1">
                    Ligne Directe (Paris)
                  </p>
                  <p className="font-body-md text-body-md">+33 (0) 1 45 22 88 00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 flex-grow">
            <h3 className="font-label-caps text-label-caps text-tertiary mb-8 uppercase tracking-[0.2em]">
              Présence Mondiale
            </h3>
            <div className="space-y-10">
              {officeBlocks.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="border-l border-tertiary/30 pl-6"
                >
                  <h4 className="font-headline-sm text-[24px] mb-2">{office.city}</h4>
                  <p className="font-body-md text-on-surface-variant mb-2">{office.address}</p>
                  <p className="font-label-caps text-[10px] text-outline tracking-widest">{office.coords}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <div className="w-full h-[500px] relative overflow-hidden">
          <img
            className="w-full h-full object-cover grayscale brightness-50"
            alt="An expansive, luxury interior of a private gallery or atelier with vast stone walls and soaring ceilings."
            src="/assets/images/com.png"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-2xl text-center px-8">
              <p className="font-display-lg text-[64px] leading-tight italic opacity-80">
                "La discrétion est l'ultime forme du prestige."
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
