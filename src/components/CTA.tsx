import { motion } from 'framer-motion'
import InternalLink from './InternalLink'
import { ROUTES } from '../lib/routes'

const CTA = () => {
  return (
    <section className="relative py-24 md:py-section-gap overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-tertiary opacity-5"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-tertiary/10 rounded-full blur-[80px] md:blur-[120px]"
        />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-edge text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display-xl text-[36px] md:text-display-lg text-on-surface mb-12 tracking-tighter leading-tight"
        >
          Définissez la prochaine époque
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-gutter"
        >
          <InternalLink
            to={ROUTES.contact}
            className="bg-tertiary text-on-tertiary px-12 py-5 font-label-caps text-label-caps hover:bg-tertiary-fixed transition-all uppercase tracking-widest text-lg"
          >
            Demander un Briefing
          </InternalLink>
          <InternalLink
            className="font-label-caps text-label-caps text-on-surface border-b border-on-surface pb-1 uppercase tracking-widest hover:text-tertiary hover:border-tertiary transition-colors"
            to={ROUTES.services}
          >
            Voir nos services
          </InternalLink>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
