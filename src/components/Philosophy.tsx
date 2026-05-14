import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="py-20 md:py-section-gap px-6 md:px-margin-cinematic max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-gutter">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <span className="font-label-caps text-tertiary mb-6 block">NOTRE PHILOSOPHIE</span>
          <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-0 md:mb-12 uppercase tracking-tighter">Notre Méthode</h2>
        </motion.div>
        <div className="lg:col-span-7 space-y-10 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pl-8 md:pl-12 border-l border-tertiary/30"
          >
            <p className="font-headline-md text-xl md:text-headline-md italic text-on-surface leading-snug">
              Une précision chirurgicale appliquée à chaque strate de l'organisation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-display-lg text-[40px] md:text-display-lg text-tertiary block mb-2">01.</span>
              <h4 className="font-label-caps text-on-surface mb-4 uppercase tracking-wider">Diagnostic Spectral</h4>
              <p className="text-on-surface-variant text-xs md:text-sm">Une vision à 360° des risques et opportunités cachées.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="font-display-lg text-[40px] md:text-display-lg text-tertiary block mb-2">02.</span>
              <h4 className="font-label-caps text-on-surface mb-4 uppercase tracking-wider">Stratégie Cinétique</h4>
              <p className="text-on-surface-variant text-xs md:text-sm">Des plans d'action agiles pour un déploiement éclair.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
