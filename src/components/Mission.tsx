import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="py-section-gap px-margin-edge max-w-container-max mx-auto grid grid-cols-12 gap-gutter">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="col-span-12 md:col-span-8"
      >
        <span className="font-label-caps text-label-caps text-tertiary uppercase mb-8 block">Notre Manifeste</span>
        <h2 className="font-display-lg text-display-lg text-on-surface mb-12">
          Architectes de clarté dans un paysage complexe.
        </h2>
        <div className="h-1 w-24 bg-tertiary mb-12"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Chez Étude Viale, nous ne nous contentons pas de conseiller ; nous concevons des structures de décision. Chaque stratégie est une pièce d'orfèvrerie, taillée pour répondre aux pressions structurelles et aux opportunités volatiles de l'économie mondiale. Nous croyons en la permanence du sens et l'impact de la précision.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-12 md:col-span-4 flex flex-col justify-end space-y-8"
      >
        <div className="p-8 border-l border-outline-variant/30">
          <span className="font-display-lg text-headline-md text-tertiary block mb-2">94%</span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Taux de Rétention des Partenariats</span>
        </div>
        <div className="p-8 border-l border-outline-variant/30">
          <span className="font-display-lg text-headline-md text-tertiary block mb-2">12B€</span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Actifs Sous Conseil Stratégique</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;
