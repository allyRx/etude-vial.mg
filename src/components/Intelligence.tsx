import { motion } from 'framer-motion';

const Intelligence = () => {
  return (
    <section className="py-section-gap relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tertiary/5 backdrop-blur-3xl -skew-x-12"></div>
      <div className="px-margin-cinematic max-w-container-max mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-container border border-tertiary/20 p-20 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-label-caps text-tertiary mb-4 block uppercase">Intelligence Économique</span>
              <h2 className="font-display-lg text-display-lg text-on-surface mb-8">Expertise en Placement & Développement</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                Nous offrons des conseils sur-mesure pour vos placements sur les marchés financiers et immobiliers. Notre approche pragmatique aide les entrepreneurs à développer leur structure avec une vision claire.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                  <div>
                    <h5 className="font-label-caps text-on-surface uppercase">Gestion de Patrimoine</h5>
                    <p className="text-sm text-on-surface-variant">Conseils stratégiques pour faire fructifier votre capital dans l'immobilier et la finance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                  <div>
                    <h5 className="font-label-caps text-on-surface uppercase">Croissance PME & Commerces</h5>
                    <p className="text-sm text-on-surface-variant">Solutions concrètes pour le développement d'entreprises et de commerces de proximité.</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square border border-tertiary/30 p-4"
            >
              <div className="absolute inset-0 m-8 border border-tertiary/10"></div>
              <img className="w-full h-full object-cover" alt="Skyscraper at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAROq6a3J1Ad-kjg9FRCtVTYzZRMc7C9S5CD-1VOL1KQOLittKPcfifDlf1IUS9gq1K4r0HRQFUwQv7gaZNUOtW7V0qsxCfw2dJIrV7CdhJmwRRyJlxutvBk82lMoMsyaSW41kv3FqMse1w7-jYlOFmiw5eqJCUl6K9LegvyDyLJo4RxpkWkKPL3q1BlPPkEXqNvkW2GOBpq0jE15oze8KnWVKhyaBhMmQsNpwracD4nwP5VLpLfEplQh-00AQD2thkQtxHwBx4otY"/>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intelligence;
