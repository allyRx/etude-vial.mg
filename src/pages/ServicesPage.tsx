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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <main>
      <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden pt-24 md:pt-20">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover brightness-50"
            alt="A cinematic low-angle shot of a modern glass skyscraper reflecting a deep obsidian night sky."
            src="/assets/images/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/40 to-surface" />
        </motion.div>
        <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-edge w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.span variants={itemVariants} className="font-label-caps text-[10px] md:text-label-caps text-tertiary tracking-[0.4em] block mb-6 md:mb-8 opacity-80 uppercase">
              LE PRESTIGE DU CONSEIL
            </motion.span>
            <motion.h1 variants={itemVariants} className="font-serif text-[40px] sm:text-[60px] md:text-display-xl text-on-surface leading-tight mb-8 md:mb-10 italic">
              L'Architecture de la Réussite
            </motion.h1>
            <motion.p variants={itemVariants} className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Une précision chirurgicale dans la stratégie, une exécution sans faille pour les acteurs qui façonnent la performance durable.
            </motion.p>
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 60, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 md:mt-16 w-px bg-tertiary/40 mx-auto hidden sm:block" 
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-section-gap">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-gutter">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="max-w-xl mx-auto md:mx-0">
            <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary mb-6 block uppercase">
              HOSPITALITY & RETAIL
            </span>
            <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-8 leading-tight">
              Ingénierie de la Croissance
            </h2>
            <div className="h-px w-full bg-outline-variant/30 mb-8" />
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-12 leading-relaxed">
              Nous transformons les destinations en héritages. Notre approche combine l’analyse, la structure et une compréhension intime de l’expérience client haut de gamme.
            </p>
            <ul className="space-y-6">
              {[
                { icon: 'architecture', label: 'Écosystème de Marque Signature' },
                { icon: 'analytics', label: 'Analyse Prédictive de la Demande' }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-4 text-on-surface"
                >
                  <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                  <span className="font-body-md text-sm md:text-base">{item.label}</span>
                </motion.li>
              ))}
            </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="order-1 md:order-2 relative group overflow-hidden min-h-[350px] md:min-h-[560px] w-full border border-outline-variant/10"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              alt="A high-fashion editorial photograph showing a luxury retail interior"
              src="/assets/images/res.png"
            />
            <div className="absolute inset-0 bg-surface/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-[70vh] md:min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 md:py-section-gap overflow-hidden">
        <motion.div 
          initial={{ y: "10%" }}
          whileInView={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover brightness-[0.3]"
            alt="An abstract, low-exposure shot of a modern financial district at night."
            src="/assets/images/inte.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/10 via-surface/50 to-surface" />
        </motion.div>
        <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-edge w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-24 max-w-4xl border-l-4 border-tertiary shadow-2xl"
          >
            <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary mb-6 block uppercase">
              STRATÉGIE DE HAUTE VOLÉE
            </span>
            <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-8 md:mb-10 leading-tight">
              Capital &amp; Stratégie Financière
            </h2>
            <p className="font-body-lg text-lg md:text-body-lg text-on-surface-variant mb-10 md:mb-12 leading-relaxed">
              Sécuriser l’avenir demande une vision structurelle. Nous aidons à orienter les décisions de capital avec une logique longue durée, lisible et robuste.
            </p>
            <InternalLink
              to={ROUTES.contact}
              className="inline-flex border border-tertiary text-tertiary px-8 md:px-10 py-4 font-label-caps text-xs md:text-label-caps hover:bg-tertiary hover:text-on-tertiary transition-all duration-500 group"
            >
              Demander une consultation
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">north_east</span>
            </InternalLink>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface blueprint-grid py-20 md:py-section-gap">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="font-label-caps text-label-caps text-tertiary mb-6 block uppercase tracking-widest">
                SYSTÈMES & PERFORMANCE
              </span>
              <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface leading-tight">
                Optimisation Opérationnelle
              </h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:text-right max-w-xl"
            >
              <p className="font-body-md text-sm md:text-base text-on-surface-variant italic">
                "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer."
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-gutter">
            {serviceCards.map((card, idx) => (
              <motion.article
                key={card.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="glass-panel p-8 md:p-12 group hover:border-tertiary/60 transition-all duration-500 cursor-default"
              >
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <span className="font-display-lg text-[48px] md:text-display-lg text-tertiary/20 group-hover:text-tertiary transition-colors duration-700 leading-none">
                    {card.number}
                  </span>
                  <motion.span 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="material-symbols-outlined text-tertiary text-4xl" 
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {card.icon}
                  </motion.span>
                </div>
                <h3 className="font-headline-sm text-2xl md:text-headline-sm text-on-surface mb-4 md:mb-6 group-hover:text-tertiary transition-colors">{card.title}</h3>
                <p className="text-on-surface-variant text-sm md:text-body-md mb-8 leading-relaxed">{card.text}</p>
                <div className="flex gap-2">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "33%" }}
                    transition={{ delay: 0.5 + (idx * 0.2), duration: 1 }}
                    className="h-1 bg-tertiary" 
                  />
                  <div className="h-1 flex-1 bg-outline-variant/30" />
                  <div className="h-1 flex-1 bg-outline-variant/30" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-20 md:py-section-gap relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-32"
          >
            <span className="font-label-caps text-label-caps text-tertiary mb-6 block">NOTRE PROTOCOLE</span>
            <h2 className="font-display-lg text-[32px] md:text-headline-md text-on-surface">La Méthodologie Viale</h2>
          </motion.div>
          <div className="relative">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -translate-y-1/2 hidden md:block origin-left" 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
              {serviceSteps.map((step, i) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group cursor-default text-center md:text-left"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, borderColor: "rgba(216, 196, 162, 1)" }}
                    className="bg-surface w-16 h-16 flex items-center justify-center border border-outline-variant transition-all duration-500 mb-8 md:mb-10 mx-auto md:mx-0 relative z-10 rounded-full"
                  >
                    <span className="font-label-caps text-tertiary">{step.number}</span>
                  </motion.div>
                  <h4 className="font-headline-sm text-lg md:text-body-lg text-on-surface mb-4 group-hover:text-tertiary transition-colors uppercase tracking-widest">{step.title}</h4>
                  <p className="text-on-surface-variant text-sm md:text-body-md leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-section-gap relative overflow-hidden">
        <motion.div 
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "25%", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-tertiary/5 skew-x-12" 
        />
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-8 md:mb-12 leading-tight">Entrez dans le cercle</h2>
            <p className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl mb-12 md:mb-16 leading-relaxed">
              Nous sélectionnons nos partenaires avec la même exigence qu'ils appliquent à leurs métiers. Rejoignez un accompagnement pensé pour durer.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <InternalLink
                to={ROUTES.contact}
                className="bg-tertiary text-on-tertiary px-10 md:px-16 py-5 md:py-6 font-label-caps text-xs md:text-label-caps hover:bg-tertiary-fixed-dim transition-all duration-500 shadow-2xl shadow-tertiary/20 uppercase tracking-[0.3em] relative overflow-hidden group text-center"
              >
                <span className="relative z-10">Demander un Accès Privé</span>
                <motion.div 
                  className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" 
                />
              </InternalLink>
              <InternalLink
                to={ROUTES.contact}
                className="border border-tertiary/30 text-tertiary px-10 md:px-10 py-5 md:py-6 font-label-caps text-xs md:text-label-caps hover:bg-tertiary/5 transition-all duration-500 uppercase tracking-widest text-center"
              >
                Découvrir le contact
              </InternalLink>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
