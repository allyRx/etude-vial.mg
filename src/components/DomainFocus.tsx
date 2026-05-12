import { motion } from 'framer-motion';

const DomainFocus = () => {
  return (
    <section className="py-20 md:py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-section-gap text-center"
        >
          <h3 className="font-display-lg text-[32px] md:text-headline-md text-on-surface mb-4">Domaines d'Intervention</h3>
          <p className="font-label-caps text-[10px] md:text-label-caps text-tertiary uppercase tracking-widest">Une Expertise Sectorielle de Prestige</p>
        </motion.div>
        <div className="grid grid-cols-12 gap-6 md:gap-gutter">
          {/* Restaurants */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-7 group relative overflow-hidden h-[400px] md:h-[500px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-0 md:grayscale md:hover:grayscale-0" alt="Restaurant interior" src="/assets/images/res.png"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary uppercase mb-4 block">Hôtellerie Gastronomique</span>
              <h4 className="font-display-lg text-[28px] md:text-headline-md text-on-surface mb-4">Restaurants</h4>
              <p className="font-body-md text-sm md:text-body-md text-on-surface-variant max-w-sm">Optimisation opérationnelle et ingénierie de marque pour les fleurons de la haute cuisine.</p>
            </div>
          </motion.div>
          {/* Hôtels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 md:col-span-5 group relative overflow-hidden h-[400px] md:h-[500px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-0 md:grayscale md:hover:grayscale-0" alt="Hotel lobby" src="/assets/images/hot.png"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary uppercase mb-4 block">Destination de Luxe</span>
              <h4 className="font-display-lg text-[28px] md:text-headline-md text-on-surface mb-4">Hôtels</h4>
              <p className="font-body-md text-sm md:text-body-md text-on-surface-variant">Structuration d'actifs et excellence de l'expérience client internationale.</p>
            </div>
          </motion.div>
          {/* Commerces */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 group relative overflow-hidden h-[350px] md:h-[400px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale-0 md:grayscale md:hover:grayscale-0" alt="Flagship store" src="/assets/images/com.png"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between w-full">
              <div>
                <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary uppercase mb-4 block">Retail de Prestige</span>
                <h4 className="font-display-lg text-[28px] md:text-headline-md text-on-surface mb-4">Commerces</h4>
                <p className="font-body-md text-sm md:text-body-md text-on-surface-variant max-w-lg">Redéfinir le parcours marchand à l'ère du numérique et de l'exclusivité physique.</p>
              </div>
              <div className="mt-6 md:mt-0">
                <span className="material-symbols-outlined text-tertiary text-[32px] md:text-[48px]">arrow_outward</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DomainFocus;
