import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="py-section-gap px-margin-cinematic max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <span className="font-label-caps text-tertiary mb-6 block">NOTRE PHILOSOPHIE</span>
          <h2 className="font-display-lg text-display-lg text-on-surface mb-12">Le Manifeste de la Rigueur</h2>
        </motion.div>
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pl-12 border-l border-tertiary/30"
          >
            <p className="font-headline-md text-headline-md italic text-on-surface mb-6 leading-snug">
              "L'excellence n'est pas un acte, mais une habitude de précision chirurgicale appliquée à chaque strate de l'organisation."
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Chez Étude Viale, nous croyons que chaque problématique recèle une opportunité de croissance. Notre équipe s'immerge dans votre réalité — qu'il s'agisse d'un hôtel, d'un restaurant ou d'une entreprise — pour débloquer votre plein potentiel opérationnel et financier.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-12 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-display-lg text-tertiary block mb-2">01.</span>
              <h4 className="font-label-caps text-on-surface mb-4 uppercase tracking-wider">Diagnostic Spectral</h4>
              <p className="text-on-surface-variant text-sm">Une vision à 360° des risques et opportunités cachées.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="font-display-lg text-tertiary block mb-2">02.</span>
              <h4 className="font-label-caps text-on-surface mb-4 uppercase tracking-wider">Stratégie Cinétique</h4>
              <p className="text-on-surface-variant text-sm">Des plans d'action agiles pour un déploiement éclair.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
