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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <main className="bg-surface text-on-surface">
      <section className="relative min-h-[500px] md:min-h-[716px] flex flex-col justify-center pt-24 md:pt-20 border-b border-outline-variant/10 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover grayscale"
            alt="A cinematic architectural shot of a minimalist skyscraper reflecting a deep blue twilight sky."
            src="/assets/images/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </motion.div>
        <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-edge w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl text-center mx-auto"
          >
            <motion.span variants={itemVariants} className="font-label-caps text-[10px] md:text-label-caps text-tertiary block mb-6 uppercase tracking-[0.4em]">
              Protocole d'Accès
            </motion.span>
            <motion.h1 variants={itemVariants} className="font-display-lg text-[32px] md:text-display-lg mb-8 leading-tight">
              Entrez dans la Confidentialité
            </motion.h1>
            <motion.p variants={itemVariants} className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Nous orchestrons des solutions stratégiques pour les leaders d'exception. Chaque échange est traité avec la plus haute rigueur diplomatique et architecturale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-6 md:px-margin-edge py-20 md:py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="glass-panel p-8 md:p-12 shadow-2xl">
            <h2 className="font-display-lg text-[28px] md:text-headline-md mb-10 md:mb-12 leading-tight">Demande de Consultation</h2>
            <form className="space-y-8 md:space-y-12">
              {[
                { label: 'Nom complet', placeholder: 'Veuillez décliner votre identité', type: 'text' },
                { label: 'Organisation', placeholder: 'Entité représentée', type: 'text' }
              ].map((field, i) => (
                <motion.div 
                  key={field.label} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="relative"
                >
                  <label className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase mb-4 block">
                    {field.label}
                  </label>
                  <input
                    className="w-full bg-transparent input-underline py-4 font-body-lg text-lg md:text-body-lg text-on-surface placeholder:text-outline-variant/30 focus:ring-0"
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <label className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase mb-4 block">
                  Nature du Projet
                </label>
                <textarea
                  className="w-full bg-transparent input-underline py-4 font-body-lg text-lg md:text-body-lg text-on-surface placeholder:text-outline-variant/30 focus:ring-0 resize-none"
                  placeholder="Brève description de vos impératifs stratégiques"
                  rows={4}
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <InternalLink
                  to={ROUTES.contact}
                  className="group flex items-center gap-4 text-tertiary font-label-caps text-xs md:text-label-caps uppercase tracking-widest hover:text-tertiary-fixed transition-colors"
                >
                  Soumettre la requête
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">
                    arrow_right_alt
                  </span>
                </InternalLink>
              </motion.div>
            </form>
          </div>
        </motion.div>

        <div className="lg:col-span-5 flex flex-col gap-8 md:gap-gutter">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8"
          >
            <h3 className="font-label-caps text-sm md:text-label-caps text-tertiary mb-8 uppercase tracking-[0.2em]">
              Canaux Sécurisés
            </h3>
            <div className="space-y-6">
              {[
                { icon: 'encrypted', label: 'Email ProtonMail', val: 'viale.private@etudeviale.com' },
                { icon: 'call', label: 'Ligne Directe (Paris)', val: '+33 (0) 1 45 22 88 00' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#d8c4a2", color: "#0b1324" }}
                    className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-tertiary transition-all duration-300 flex-shrink-0"
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </motion.div>
                  <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="font-body-md text-sm md:text-body-md group-hover:text-tertiary transition-colors">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 flex-grow"
          >
            <h3 className="font-label-caps text-sm md:text-label-caps text-tertiary mb-8 uppercase tracking-[0.2em]">
              Présence Mondiale
            </h3>
            <div className="space-y-8 md:space-y-10">
              {officeBlocks.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="border-l border-tertiary/30 pl-6 group cursor-default"
                >
                  <h4 className="font-headline-sm text-xl md:text-[24px] mb-2 group-hover:text-tertiary transition-colors">{office.city}</h4>
                  <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-2">{office.address}</p>
                  <p className="font-label-caps text-[10px] text-outline tracking-widest opacity-50">{office.coords}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full h-[350px] md:h-[500px] relative overflow-hidden group"
          >
            <img
              className="w-full h-full object-cover grayscale brightness-50 transition-transform duration-[3000ms] group-hover:scale-110"
              alt="Luxury interior"
              src="/assets/images/com.png"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="max-w-2xl text-center px-8"
              >
                <p className="font-display-lg text-[24px] md:text-display-lg leading-tight italic opacity-90 text-on-surface">
                  "La discrétion est l'ultime forme du prestige."
                </p>
                <div className="mt-8 h-px w-24 bg-tertiary mx-auto opacity-50" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
