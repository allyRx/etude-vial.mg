import { motion } from 'framer-motion'
import InternalLink from '../components/InternalLink'
import { ROUTES } from '../lib/routes'

const serviceSteps = [
  {
    number: '01',
    title: 'Écoute',
    text: 'Nous prenons le temps de comprendre votre activité, vos contraintes et vos ambitions avant toute recommandation.',
  },
  {
    number: '02',
    title: 'Diagnostic',
    text: 'Analyse approfondie de votre situation : finances, organisation, marché, pour identifier précisément les leviers d\'action.',
  },
  {
    number: '03',
    title: 'Stratégie',
    text: 'Élaboration d\'un plan d\'action concret, chiffré et adapté à votre réalité opérationnelle et à vos objectifs.',
  },
  {
    number: '04',
    title: 'Suivi',
    text: 'Accompagnement dans la mise en œuvre et ajustement continu pour garantir des résultats mesurables et durables.',
  },
]

const serviceCards = [
  {
    number: '01',
    icon: 'show_chart',
    title: 'Conseil en Marché Financier',
    text: 'Nous guidons vos décisions de placement : actions, obligations, fonds d\'investissement. Nos experts analysent les marchés pour maximiser vos rendements tout en maîtrisant les risques.',
  },
  {
    number: '02',
    icon: 'apartment',
    title: 'Investissement Immobilier',
    text: 'Vous souhaitez placer votre argent dans la pierre ? Nous identifions les opportunités, évaluons la rentabilité et vous accompagnons dans chaque étape de votre investissement immobilier.',
  },
  {
    number: '03',
    icon: 'trending_up',
    title: 'Développement d\'Entreprise',
    text: 'Croissance du chiffre d\'affaires, structuration de l\'organisation, optimisation des coûts : nous analysons votre entreprise et construisons avec vous une feuille de route vers la performance.',
  },
  {
    number: '04',
    icon: 'restaurant',
    title: 'Conseil Hôtellerie & Restauration',
    text: 'Rentabilité, gestion des équipes, expérience client, tarification : nos consultants connaissent les spécificités de votre secteur et interviennent directement sur le terrain pour améliorer vos résultats.',
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
      {/* Hero */}
      <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden pt-24 md:pt-20">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover brightness-50"
            alt="Cabinet de conseil stratégique Étude Viale"
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
              Nos Expertises
            </motion.span>
            <motion.h1 variants={itemVariants} className="font-serif text-[32px] md:text-display-lg text-on-surface leading-tight mb-8 md:mb-10 italic">
              Des Conseils Concrets,<br className="hidden md:block" /> Des Résultats Réels
            </motion.h1>
            <motion.p variants={itemVariants} className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Que vous souhaitiez faire fructifier votre capital, investir dans l'immobilier ou améliorer la performance de votre entreprise, nos équipes sont là pour vous guider avec précision.
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

      {/* Conseil Financier & Placement */}
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
                FINANCE & PLACEMENTS
              </span>
              <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-8 leading-tight">
                Faites Travailler Votre Argent
              </h2>
              <div className="h-px w-full bg-outline-variant/30 mb-8" />
              <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-12 leading-relaxed">
                Vous avez des liquidités à placer mais vous ne savez pas où ni comment ? Nos conseillers financiers analysent votre profil, vos objectifs et votre horizon de placement pour vous orienter vers les solutions les plus adaptées : marchés financiers, produits structurés, fonds ou diversification de portefeuille.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: 'show_chart', label: 'Marchés financiers & bourse' },
                  { icon: 'savings', label: 'Optimisation de portefeuille' },
                  { icon: 'apartment', label: 'Investissement immobilier' },
                  { icon: 'account_balance', label: 'Gestion de patrimoine' },
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
              alt="Conseil en investissement financier"
              src="/assets/images/res.png"
            />
            <div className="absolute inset-0 bg-surface/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      {/* Développement d'Entreprise */}
      <section className="relative min-h-[70vh] md:min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 md:py-section-gap overflow-hidden">
        <motion.div 
          initial={{ y: "10%" }}
          whileInView={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover brightness-[0.3]"
            alt="Développement stratégique d'entreprise"
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
              CROISSANCE & PERFORMANCE
            </span>
            <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-8 md:mb-10 leading-tight">
              Développez Votre Entreprise avec Méthode
            </h2>
            <p className="font-body-lg text-lg md:text-body-lg text-on-surface-variant mb-10 md:mb-12 leading-relaxed">
              Votre entreprise stagne ? Vos marges s'érodent ? Vous voulez passer à l'échelle mais ne savez pas par où commencer ? Nos consultants identifient les blocages, optimisent vos processus et construisent avec vous une stratégie de croissance durable — que vous soyez dans le commerce, l'hôtellerie, la restauration ou tout autre secteur.
            </p>
            <InternalLink
              to={ROUTES.contact}
              className="inline-flex border border-tertiary text-tertiary px-8 md:px-10 py-4 font-label-caps text-xs md:text-label-caps hover:bg-tertiary hover:text-on-tertiary transition-all duration-500 group"
            >
              Demander un diagnostic gratuit
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">north_east</span>
            </InternalLink>
          </motion.div>
        </div>
      </section>

      {/* Nos 4 Domaines d'Expertise */}
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
                NOS DOMAINES D'INTERVENTION
              </span>
              <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface leading-tight">
                Quatre Expertises, Un Seul Objectif
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
                "Nous ciblons vos problèmes et les résolvons — avec les bons outils, les bonnes personnes, au bon moment."
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
                transition={{ duration: 0.6, delay: idx * 0.15 }}
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
                    transition={{ delay: 0.5 + (idx * 0.15), duration: 1 }}
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

      {/* Notre Méthodologie */}
      <section className="bg-surface-container-lowest py-20 md:py-section-gap relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-32"
          >
            <span className="font-label-caps text-label-caps text-tertiary mb-6 block">NOTRE PROTOCOLE</span>
            <h2 className="font-display-lg text-[32px] md:text-headline-md text-on-surface">Comment Nous Travaillons</h2>
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

      {/* CTA Final */}
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
            <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-8 md:mb-12 leading-tight">Parlons de Votre Projet</h2>
            <p className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl mb-12 md:mb-16 leading-relaxed">
              Que ce soit pour un placement financier, un projet immobilier ou le développement de votre activité, nos consultants sont disponibles pour un premier échange sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <InternalLink
                to={ROUTES.contact}
                className="bg-tertiary text-on-tertiary px-10 md:px-16 py-5 md:py-6 font-label-caps text-xs md:text-label-caps hover:bg-tertiary-fixed-dim transition-all duration-500 shadow-2xl shadow-tertiary/20 uppercase tracking-[0.3em] relative overflow-hidden group text-center"
              >
                <span className="relative z-10">Prendre Rendez-vous</span>
                <motion.div 
                  className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" 
                />
              </InternalLink>
              <InternalLink
                to={ROUTES.contact}
                className="border border-tertiary/30 text-tertiary px-10 md:px-10 py-5 md:py-6 font-label-caps text-xs md:text-label-caps hover:bg-tertiary/5 transition-all duration-500 uppercase tracking-widest text-center"
              >
                Nous Contacter
              </InternalLink>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
