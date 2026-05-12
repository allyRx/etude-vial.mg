import { motion } from 'framer-motion'
import InternalLink from '../components/InternalLink'
import { ROUTES } from '../lib/routes'

const values = [
  {
    title: 'Expertise Terrain',
    text: "Nos équipes s'immergent dans votre environnement opérationnel — restaurant, hôtel, commerce ou entreprise — pour comprendre vos réalités avant de proposer des solutions.",
    icon: 'search_insights'
  },
  {
    title: 'Rigueur Analytique',
    text: "Chaque recommandation repose sur une analyse précise de vos données, de votre marché et de vos objectifs. Nous ne conseillons pas à l'aveugle.",
    icon: 'analytics'
  },
  {
    title: 'Accompagnement Sur-Mesure',
    text: "Pas de solution générique. Nous construisons une stratégie adaptée à votre secteur, votre taille et vos ambitions — à court comme à long terme.",
    icon: 'handshake'
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
            alt="Cabinet de conseil stratégique"
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
              Qui Sommes-Nous
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-[32px] md:text-display-lg mb-8 leading-tight italic"
            >
              Un Cabinet de Conseil <br className="hidden md:block" /> au Service de votre Croissance
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
            >
              Étude Viale est un cabinet de conseil stratégique basé à Antananarivo. Nos équipes accompagnent les entreprises, les investisseurs et les porteurs de projets dans l'optimisation de leur performance et la structuration de leur patrimoine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 md:py-section-gap relative">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label-caps text-label-caps text-tertiary mb-6 block">NOTRE MISSION</span>
            <h2 className="font-display-lg text-[32px] md:text-headline-lg mb-8 leading-tight">Identifier les Problèmes. Construire les Solutions.</h2>
            <div className="space-y-6 font-body-md text-sm md:text-on-surface-variant leading-relaxed">
              <p>
                Étude Viale est née d'un constat simple : les entreprises, quelle que soit leur taille, ont besoin d'un regard extérieur expert pour détecter leurs freins et libérer leur potentiel. Notre cabinet met à disposition des équipes pluridisciplinaires capables d'intervenir dans des environnements variés — commerce, hôtellerie, restauration ou industrie.
              </p>
              <p>
                Nous ne nous contentons pas de diagnostiquer. Nous co-construisons des plans d'action concrets, mesurables et adaptés à votre réalité terrain. Notre engagement : des résultats tangibles, pas des rapports oubliés dans un tiroir.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-12">
              {[
                { val: "100+", label: "Entreprises Accompagnées" },
                { val: "3", label: "Pôles d'Expertise" }
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
                alt="Conseil stratégique en action" 
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
                "Notre rôle est de comprendre votre métier aussi bien que vous, pour vous conseiller mieux que quiconque."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
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

      {/* Notre Équipe */}
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
                  alt="L'équipe Étude Viale" 
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
              <span className="font-label-caps text-label-caps text-tertiary mb-6 block uppercase tracking-[0.2em]">Notre Équipe</span>
              <h2 className="font-serif text-[36px] md:text-display-lg italic mb-6 md:mb-8 leading-tight">Des Experts à Votre Service</h2>
              <p className="font-label-caps text-[10px] md:text-sm text-on-surface-variant mb-8 md:mb-10 tracking-widest uppercase">Conseil · Finance · Développement d'Entreprise</p>
              <div className="space-y-6 font-body-md text-sm md:text-on-surface-variant leading-relaxed mb-10 md:mb-12">
                <p>
                  Notre cabinet réunit des consultants spécialisés en stratégie financière, en développement commercial et en optimisation opérationnelle. Chaque mission est conduite par une équipe dédiée, sélectionnée selon les spécificités de votre secteur.
                </p>
                <p>
                  Que vous soyez un restaurateur cherchant à améliorer sa rentabilité, un investisseur souhaitant optimiser ses placements ou un entrepreneur voulant structurer sa croissance, nos experts s'adaptent à votre réalité et vous accompagnent à chaque étape.
                </p>
              </div>
              <InternalLink 
                to={ROUTES.contact} 
                className="inline-flex items-center gap-4 text-tertiary font-label-caps text-label-caps uppercase tracking-widest group border-b border-transparent hover:border-tertiary transition-all"
              >
                Prendre contact avec nos équipes
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </InternalLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Présence */}
      <section className="bg-background py-24 border-y border-outline-variant/10 overflow-hidden relative">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12"
          >
            {['Hôtellerie', 'Restauration', 'Commerce', 'Finance & Investissement'].map((sector, i, arr) => (
              <div key={sector} className="flex items-center gap-12">
                <span className="font-serif text-headline-md italic">{sector}</span>
                {i < arr.length - 1 && <div className="w-2 h-2 rounded-full bg-tertiary" />}
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
            Prêt à Passer à <br/> l'Étape Supérieure ?
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
              <span className="group-hover:tracking-[0.2em] transition-all duration-500">Demander une Consultation</span>
            </InternalLink>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
