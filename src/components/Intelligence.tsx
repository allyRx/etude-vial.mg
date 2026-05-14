import { motion } from 'framer-motion';

const Intelligence = () => {
  return (
    <section className="py-20 md:py-section-gap relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tertiary/5 backdrop-blur-3xl -skew-x-12"></div>
      <div className="px-6 md:px-margin-cinematic max-w-container-max mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-container border border-tertiary/20 p-8 md:p-20 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="font-label-caps text-tertiary mb-4 block uppercase text-[10px] md:text-label-caps">Intelligence Économique</span>
              <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface mb-6 md:mb-8 leading-tight">Valorisation & <br/> Développement</h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                  <div>
                    <h5 className="font-label-caps text-on-surface uppercase text-sm md:text-base">Gestion de Patrimoine</h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">Conseils stratégiques pour faire fructifier votre capital dans l'immobilier et la finance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                  <div>
                    <h5 className="font-label-caps text-on-surface uppercase text-sm md:text-base">Croissance PME & Commerces</h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">Solutions concrètes pour le développement d'entreprises et de commerces de proximité.</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square border border-tertiary/30 p-2 md:p-4"
            >
              <div className="absolute inset-0 m-4 md:m-8 border border-tertiary/10"></div>
              <img className="w-full h-full object-cover" alt="Skyscraper at night" src="/assets/images/inte.png"/>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intelligence;
