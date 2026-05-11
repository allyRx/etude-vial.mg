import { motion } from 'framer-motion'
import InternalLink from './InternalLink'
import { ROUTES } from '../lib/routes'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale opacity-40"
          alt="A low-angle shot of a majestic, modern glass and steel skyscraper reaching toward a dark twilight sky."
          src="/assets/images/hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-edge text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-gutter inline-block px-4 py-1 border border-tertiary/30 rounded-full"
        >
          <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.3em]">Conseil Stratégique de Haute Volée</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display-xl text-display-xl text-on-surface leading-tight mb-8"
        >
          Optimisez votre <span className="italic font-light text-stroke">Capital</span> <br/>et votre Croissance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
        >
          Conseil stratégique en placements financiers, immobilier et développement d'entreprise. Nous transformons vos problématiques en leviers de performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-gutter"
        >
          <InternalLink
            to={ROUTES.services}
            className="bg-tertiary text-on-tertiary px-10 py-4 font-label-caps text-label-caps hover:scale-105 transition-all"
          >
            EXPLORER NOS SERVICES
          </InternalLink>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
