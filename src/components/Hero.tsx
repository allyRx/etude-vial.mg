import { motion } from 'framer-motion'
import InternalLink from './InternalLink'
import { ROUTES } from '../lib/routes'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale opacity-40"
          alt="A low-angle shot of a majestic, modern glass and steel skyscraper reaching toward a dark twilight sky."
          src="/assets/images/hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-edge text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-gutter inline-block px-4 py-1 border border-tertiary/30 rounded-full"
        >
          <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary uppercase tracking-[0.3em]">Conseil Stratégique de Haute Volée</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display-xl text-[48px] sm:text-[64px] md:text-display-xl text-on-surface leading-tight mb-8"
        >
          Optimisez votre <span className="italic font-light text-stroke">Capital</span> <br className="hidden md:block"/> et votre Croissance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
        >
          Conseil stratégique en placements financiers, immobilier et développement d'entreprise. Nous transformons vos problématiques en leviers de performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6 md:gap-gutter"
        >
          <InternalLink
            to={ROUTES.services}
            className="bg-tertiary text-on-tertiary px-10 py-4 font-label-caps text-label-caps hover:scale-105 transition-all text-center"
          >
            EXPLORER NOS SERVICES
          </InternalLink>
          <InternalLink
            to={ROUTES.contact}
            className="border border-tertiary/30 text-tertiary px-10 py-4 font-label-caps text-label-caps hover:bg-tertiary/10 transition-all text-center"
          >
            DEMANDER UNE CONSULTATION
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
