import { motion } from 'framer-motion'
import InternalLink from '../components/InternalLink'
import { ROUTES } from '../lib/routes'

const values = [
  {
    title: 'Excellence Architecturale',
    text: 'Nous concevons des solutions sur mesure où chaque détail est pensé pour renforcer la structure globale de votre patrimoine.',
    icon: 'architecture'
  },
  {
    title: 'Discrétion Absolue',
    text: 'Le secret est le fondement de notre relation avec nos clients d’exception. Une confidentialité sans compromis.',
    icon: 'verified_user'
  },
  {
    title: 'Vision Long Terme',
    text: 'Nous ne cherchons pas le gain éphémère, mais la pérennité et la transmission des actifs à travers les générations.',
    icon: 'timeline'
  }
]

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <main className="bg-surface text-on-surface">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-24 md:pt-20 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover grayscale"
            alt="Minimalist luxury architectural detail"
            src="/assets/images/inte.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
        </motion.div>
        <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-edge w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.span 
              variants={itemVariants}
              className="font-label-caps text-[10px] md:text-label-caps text-tertiary block mb-6 uppercase tracking-[0.4em]"
            >
              L'Héritage Viale
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-[40px] sm:text-[60px] md:text-display-xl mb-8 leading-tight italic"
            >
              L'Art du Conseil <br className="hidden md:block" /> de Haute Précision
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
            >
              Fondée sur des principes de rigueur et d'élégance stratégique, l'Étude Viale accompagne les décideurs dans la structuration de leur réussite.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-section-gap relative">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label-caps text-label-caps text-tertiary mb-6 block">NOTRE GENÈSE</span>
            <h2 className="font-display-lg text-[32px] md:text-headline-lg mb-8 leading-tight">Une Signature Internationale</h2>
            <div className="space-y-6 font-body-md text-sm md:text-on-surface-variant leading-relaxed">
              <p>
                L'Étude Viale est née d'une volonté simple : apporter une clarté absolue dans un monde financier et immobilier complexe. Notre cabinet s'est imposé comme une référence pour ceux qui exigent plus qu'un simple conseil : une véritable architecture de croissance.
              </p>
              <p>
                Présents à Paris, Londres et Genève, nous intervenons aux carrefours des opportunités mondiales pour sécuriser et magnifier les actifs de nos partenaires.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-12">
              {[
                { val: "15+", label: "Années d'Excellence" },
                { val: "1.2B", label: "Actifs Conseillés" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.2) }}
                >
                  <p className="font-serif text-[40px] md:text-display-md text-tertiary">{stat.val}</p>
                  <p className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="relative mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] overflow-hidden border border-outline-variant/30"
            >
              <img 
                src="/assets/images/res.png" 
                alt="Architecture and strategy" 
                className="w-full h-full object-cover grayscale hover:scale-110 transition-transform duration-[3000ms]"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 glass-panel p-6 md:p-8 max-w-xs hidden sm:block"
            >
              <p className="font-body-sm text-xs md:text-sm italic text-on-surface leading-snug">
                "La stratégie est une symphonie où chaque note doit être parfaitement accordée."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-surface-container-lowest blueprint-grid py-20 md:py-section-gap">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
          <div className="text-center mb-16 md:mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-label-caps text-label-caps text-tertiary mb-4 block uppercase tracking-widest"
            >
              Nos Piliers
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display-lg text-[32px] md:text-headline-lg leading-tight"
            >
              Les Fondations de notre Engagement
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-gutter">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-panel p-8 md:p-12 group hover:border-tertiary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <motion.span 
                  whileHover={{ scale: 1.2, color: "#d8c4a2" }}
                  className="material-symbols-outlined text-tertiary text-4xl mb-8 block transition-colors" 
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {value.icon}
                </motion.span>
                <h3 className="font-headline-sm text-xl md:text-headline-sm text-on-surface mb-6 group-hover:text-tertiary transition-colors">{value.title}</h3>
                <p className="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-section-gap overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group overflow-hidden max-w-lg mx-auto lg:max-w-none">
                <img 
                  src="/assets/images/com.png" 
                  alt="Founder Portrait" 
                  className="w-full aspect-square object-cover grayscale brightness-75 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-[10px] md:border-[20px] border-surface/20" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <span className="font-label-caps text-label-caps text-tertiary mb-6 block uppercase tracking-[0.2em]">Direction</span>
              <h2 className="font-serif text-[48px] md:text-display-lg italic mb-6 md:mb-8 leading-none">Romain Viale</h2>
              <p className="font-label-caps text-[10px] md:text-sm text-on-surface-variant mb-8 md:mb-10 tracking-widest uppercase">Fondateur & Directeur de la Stratégie</p>
              <div className="space-y-6 font-body-md text-sm md:text-on-surface-variant leading-relaxed mb-10 md:mb-12">
                <p>
                  Expert reconnu en ingénierie financière et développement hôtelier, Romain Viale a bâti l'Étude sur une conviction : le conseil doit être un acte de création.
                </p>
                <p>
                  Son approche mêle rigueur analytique et intuition du marché pour transformer les actifs de ses clients en véritables leviers de puissance.
                </p>
              </div>
              <InternalLink 
                to={ROUTES.contact} 
                className="inline-flex items-center gap-4 text-tertiary font-label-caps text-label-caps uppercase tracking-widest group border-b border-transparent hover:border-tertiary transition-all"
              >
                Demander un entretien privé
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </InternalLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence Banner */}
      <section className="bg-background py-24 border-y border-outline-variant/10 overflow-hidden relative">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-between items-center gap-12"
          >
            {['Paris', 'London', 'Geneva', 'Luxembourg'].map((city, i) => (
              <div key={city} className="flex items-center gap-12">
                <span className="font-serif text-headline-md italic">{city}</span>
                {i < 3 && <div className="w-2 h-2 rounded-full bg-tertiary" />}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-section-gap relative">
        <div className="max-w-4xl mx-auto px-6 md:px-margin-edge text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display-lg text-[32px] sm:text-[48px] md:text-display-lg mb-12 leading-tight"
          >
            Prêt à Structurer <br/> votre Réussite ?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <InternalLink
              to={ROUTES.contact}
              className="bg-tertiary text-on-tertiary px-10 md:px-16 py-5 md:py-6 font-label-caps text-xs md:text-label-caps hover:bg-tertiary-fixed-dim transition-all duration-500 shadow-2xl shadow-tertiary/10 uppercase tracking-widest inline-block group"
            >
              <span className="group-hover:tracking-[0.2em] transition-all duration-500">Commencer la Consultation</span>
            </InternalLink>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
