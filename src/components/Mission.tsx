import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="py-20 md:py-section-gap px-6 md:px-margin-edge max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-gutter">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="col-span-12 md:col-span-8"
      >
        <span className="font-label-caps text-label-caps text-tertiary uppercase mb-6 md:mb-8 block">Notre Manifeste</span>
        <h2 className="font-display-lg text-[40px] md:text-display-lg text-on-surface mb-8 md:mb-12 leading-tight">
          Cibler vos problèmes, concevoir vos solutions.
        </h2>
        <div className="h-1 w-20 md:w-24 bg-tertiary mb-8 md:mb-12"></div>
        <p className="font-body-lg text-lg md:text-body-lg text-on-surface-variant leading-relaxed">
          Nos équipes sont dédiées à la compréhension profonde de vos problématiques sectorielles. Que vous soyez un restaurant, un hôtel, une entreprise ou un commerce, nous identifions les points de friction pour instaurer une efficacité opérationnelle et financière durable.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-12 md:col-span-4 flex flex-col justify-end space-y-6 md:space-y-8"
      >
        <div className="p-6 md:p-8 border-l border-outline-variant/30 bg-surface-container/30">
          <span className="font-display-lg text-[48px] md:text-headline-md text-tertiary block mb-2">94%</span>
          <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">Taux de Rétention des Partenariats</span>
        </div>
        <div className="p-6 md:p-8 border-l border-outline-variant/30 bg-surface-container/30">
          <span className="font-display-lg text-[48px] md:text-headline-md text-tertiary block mb-2">12B€</span>
          <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase">Actifs Sous Conseil Stratégique</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;
