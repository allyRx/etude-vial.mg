import { motion } from 'framer-motion';

const DomainFocus = () => {
  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-edge">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-section-gap text-center"
        >
          <h3 className="font-display-lg text-headline-md text-on-surface mb-4">Domaines d'Intervention</h3>
          <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Une Expertise Sectorielle de Prestige</p>
        </motion.div>
        <div className="grid grid-cols-12 gap-gutter">
          {/* Restaurants */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-7 group relative overflow-hidden h-[500px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale hover:grayscale-0" alt="Restaurant interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHYfhcH3EVBRSqNlRzkabHV6F-DxKgQ7YT-cllqfBI1wyGFI8oiyZn1ZJaIZkO5ruKygi7Th2mPu7eowL3qDeH8bSX_4CdhmxWMcFlyq5nSmZNtfwQnhH9TiKq-_brxzfMGhgpqdP8aYI6j_uu2fDF4QtL1HcmZN_fJCkaun7bjth8QhMN5iDvObeTTCImjGVaEsT28iIhNUrA7P38-UpwrQHtU20w6xVxYp0F--bKujcF3yi_sqCZwyFpWLTVeqls-XG7EWVfOm4"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-12">
              <span className="font-label-caps text-label-caps text-tertiary uppercase mb-4 block">Hôtellerie Gastronomique</span>
              <h4 className="font-display-lg text-headline-md text-on-surface mb-4">Restaurants</h4>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">Optimisation opérationnelle et ingénierie de marque pour les fleurons de la haute cuisine.</p>
            </div>
          </motion.div>
          {/* Hôtels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 md:col-span-5 group relative overflow-hidden h-[500px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale hover:grayscale-0" alt="Hotel lobby" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOZeqZqh0rTbtPuNdold0ZxedJsePLn7BGARSaXszIbrz4sEr1xTqFkWfWXdzlg9C4XwwewhmWXo18NuavwtagxyBvMxf6ZOMAEfCQqJ0SElnwBRYkm2QfHPWhoezIlJEHuyMNqShr6nUYPDIP_cTGAceRrc6BNfgdoSD4Ntn0ejQuD0Sb9_x9z85GmesWwNkGf60mMjskFgFdBivbSuFJ3VR3BSAvdmMaF9838li_OEkUUA4wiGfjUidHrJW9nocp2lXQoVyIo_M"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-12">
              <span className="font-label-caps text-label-caps text-tertiary uppercase mb-4 block">Destination de Luxe</span>
              <h4 className="font-display-lg text-headline-md text-on-surface mb-4">Hôtels</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Structuration d'actifs et excellence de l'expérience client internationale.</p>
            </div>
          </motion.div>
          {/* Commerces */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 group relative overflow-hidden h-[400px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale hover:grayscale-0" alt="Flagship store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7ji5iRWOFBr5a2abKAi55XrmHwX-C2eIPIiHbKKeuk--sn-gLF4-72n5uW4CBk-Ni1M2wHS1YAa3ayruc8JMBqfvIrGs986fmSE0zeLAvMM_o-KFCKroe922rIexkMPhiDZcofkNPlRe_EInXvqRiySS8CURzsM2ZnjzTIkBNG3NdvB52bWBREf7y1juI8VZr4XTtHcWTFwP3YQefQH51fP0ErZ_S0ecM6hbCU4sdrl6kk9AsRjvVE-UkAASifRhTKIEHE3nHMg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 flex flex-col md:flex-row md:items-end justify-between w-full">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase mb-4 block">Retail de Prestige</span>
                <h4 className="font-display-lg text-headline-md text-on-surface mb-4">Commerces</h4>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">Redéfinir le parcours marchand à l'ère du numérique et de l'exclusivité physique.</p>
              </div>
              <div className="mt-8 md:mt-0">
                <span className="material-symbols-outlined text-tertiary text-[48px]">arrow_outward</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DomainFocus;
