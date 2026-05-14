import { motion } from 'framer-motion'
import InternalLink from './InternalLink'
import { ROUTES } from '../lib/routes'

const Hero = () => {
  const services = [
    "Conseil en Placement Financier",
    "Investissement Immobilier",
    "Développement d'Entreprise",
    "Hôtellerie & Restauration",
    "Audit de Performance",
    "Stratégie de Croissance"
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale opacity-30"
          alt="Modern skyscraper"
          src="/assets/images/hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"></div>
      </div>
      
      <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-edge text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block px-5 py-2 border border-tertiary/20 rounded-full bg-tertiary/5 backdrop-blur-sm"
        >
          <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary uppercase tracking-[0.4em]">Expertise & Stratégie</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display-xl text-[44px] sm:text-[60px] md:text-[84px] text-on-surface leading-[1.1] mb-12 tracking-tighter"
        >
          Propulsez votre <br/> <span className="italic font-light text-tertiary">Réussite</span>
        </motion.h1>

        {/* All Services as Badges/Labels */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -5, 0]
              }}
              transition={{ 
                delay: 0.4 + (i * 0.1), 
                duration: 3 + (i * 0.5), 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(216, 196, 162, 0.1)", y: 0 }}
              className="px-6 py-3 border border-tertiary/20 bg-surface/5 backdrop-blur-md rounded-none flex items-center gap-3 group cursor-default"
            >
              <div className="w-1.5 h-1.5 bg-tertiary rounded-full group-hover:scale-150 transition-transform"></div>
              <span className="font-label-caps text-[11px] md:text-xs text-on-surface-variant uppercase tracking-[0.2em] whitespace-nowrap">
                {service}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <InternalLink
            to={ROUTES.services}
            className="bg-tertiary text-on-tertiary px-12 py-5 font-label-caps text-label-caps hover:bg-tertiary-fixed transition-all text-center tracking-widest"
          >
            DÉCOUVRIR NOS SERVICES
          </InternalLink>
          <InternalLink
            to={ROUTES.contact}
            className="border border-outline-variant/30 text-on-surface px-12 py-5 font-label-caps text-label-caps hover:bg-on-surface/5 transition-all text-center tracking-widest"
          >
            NOUS CONTACTER
          </InternalLink>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-tertiary/40"></div>
      </motion.div>
    </section>
  )
}

export default Hero
