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
    <section id="services" className="py-20 md:py-section-gap px-6 md:px-margin-edge">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-gutter items-start mb-12 md:mb-section-gap">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary uppercase block border-l-2 border-tertiary pl-4">Architecture Financière</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h2 className="font-display-lg text-[32px] md:text-headline-md text-on-surface mb-6 md:mb-8 leading-tight">Expertises ciblées pour <br/> résultats concrets.</h2>
            <p className="font-body-lg text-lg md:text-body-lg text-on-surface-variant">
              Une approche rigoureuse pour valoriser votre patrimoine et dynamiser votre croissance.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter"
        >
          <motion.div variants={item} className="glass-panel p-8 md:p-10 border border-outline-variant/20 hover:border-tertiary/40 transition-colors">
            <span className="material-symbols-outlined text-tertiary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
            <h5 className="font-headline-sm text-2xl md:text-headline-sm text-on-surface mb-4">Placement & Immo</h5>
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-6">Optimisation de capital et stratégies immobilières à haute valeur ajoutée.</p>
            <div className="h-[1px] w-full bg-outline-variant/30"></div>
          </motion.div>
          <motion.div variants={item} className="glass-panel p-8 md:p-10 border border-outline-variant/20 hover:border-tertiary/40 transition-colors">
            <span className="material-symbols-outlined text-tertiary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            <h5 className="font-headline-sm text-2xl md:text-headline-sm text-on-surface mb-4">Stratégie & Croissance</h5>
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-6">Accompagnement expert pour le développement et l'exécution de votre vision.</p>
            <div className="h-[1px] w-full bg-outline-variant/30"></div>
          </motion.div>
          <motion.div variants={item} className="glass-panel p-8 md:p-10 border border-outline-variant/20 hover:border-tertiary/40 transition-colors">
            <span className="material-symbols-outlined text-tertiary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <h5 className="font-headline-sm text-2xl md:text-headline-sm text-on-surface mb-4">Audit Opérationnel</h5>
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-6">Résolution des blocages dans l'hôtellerie, la restauration et le commerce.</p>
            <div className="h-[1px] w-full bg-outline-variant/30"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicServices;
