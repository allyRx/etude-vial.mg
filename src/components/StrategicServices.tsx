import { motion } from 'framer-motion';

const StrategicServices = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-section-gap px-margin-edge">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-gutter items-start mb-section-gap">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <span className="font-label-caps text-label-caps text-tertiary uppercase block border-l-2 border-tertiary pl-4">Architecture Financière</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h2 className="font-display-lg text-headline-md text-on-surface mb-8">Conseils sur les marchés financiers et investissements immobiliers.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Notre approche de l'investissement ne repose pas sur la spéculation, mais sur l'analyse structurelle des flux et la valorisation à long terme du patrimoine matériel et immatériel.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
        >
          <motion.div variants={item} className="glass-panel p-10 border border-outline-variant/20 hover:border-tertiary/40 transition-colors">
            <span className="material-symbols-outlined text-tertiary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            <h5 className="font-headline-sm text-headline-sm text-on-surface mb-4">Analyse de Marché</h5>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Décryptage des tendances macro-économiques et micro-sectorielles avec une précision chirurgicale.</p>
            <div className="h-[1px] w-full bg-outline-variant/30"></div>
          </motion.div>
          <motion.div variants={item} className="glass-panel p-10 border border-outline-variant/20 hover:border-tertiary/40 transition-colors">
            <span className="material-symbols-outlined text-tertiary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
            <h5 className="font-headline-sm text-headline-sm text-on-surface mb-4">Asset Management</h5>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Gestion dynamique et sécurisée de portefeuilles immobiliers commerciaux et résidentiels de luxe.</p>
            <div className="h-[1px] w-full bg-outline-variant/30"></div>
          </motion.div>
          <motion.div variants={item} className="glass-panel p-10 border border-outline-variant/20 hover:border-tertiary/40 transition-colors">
            <span className="material-symbols-outlined text-tertiary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
            <h5 className="font-headline-sm text-headline-sm text-on-surface mb-4">Capital-Risque</h5>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Accompagnement dans les levées de fonds et la structuration du capital pour projets disruptifs.</p>
            <div className="h-[1px] w-full bg-outline-variant/30"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicServices;
