import { motion } from 'framer-motion';
import InternalLink from './InternalLink';
import { ROUTES } from '../lib/routes';

const MotionInternalLink = motion(InternalLink);

const Expertise = () => {
  return (
    <section id="expertises" className="bg-surface-container-lowest py-20 md:py-section-gap">
      <div className="px-6 md:px-margin-cinematic max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-label-caps text-tertiary mb-4 block uppercase">Expertise Sectorielle</span>
            <h2 className="font-display-lg text-[32px] md:text-display-lg text-on-surface">Domaines d'Influence</h2>
          </motion.div>
          <MotionInternalLink
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label-caps text-xs md:text-on-surface-variant border-b border-tertiary/40 pb-2 hover:text-tertiary transition-all"
            to={ROUTES.services}
          >
            Consulter les secteurs
          </MotionInternalLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
          {/* Hôtellerie & Restauration */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 group relative overflow-hidden bg-background border border-tertiary/10 min-h-[400px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-transform duration-1000 group-hover:scale-105" alt="Luxury hotel lobby" src="/assets/images/gast.png"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 md:p-12 w-full">
              <h3 className="font-display-lg text-[28px] md:text-display-lg text-on-surface mb-4">Hôtellerie & Gastronomie</h3>
              <p className="font-body-md text-sm md:text-body-md text-on-surface-variant max-w-md mb-8">Audit de performance et résolution de problématiques opérationnelles pour les établissements hôteliers et de restauration.</p>
              <span className="material-symbols-outlined text-tertiary">arrow_right_alt</span>
            </div>
          </motion.div>
          {/* Entreprises & Commerce */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 group relative overflow-hidden bg-background border border-tertiary/10 min-h-[350px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-transform duration-1000 group-hover:scale-105" alt="Gourmet presentation" src="/assets/images/gast.png"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8 md:p-12">
              <h3 className="font-headline-md text-2xl md:text-headline-md text-on-surface mb-4">Entreprises & Commerce</h3>
              <p className="text-on-surface-variant text-xs md:text-sm mb-6">Accompagnement stratégique pour le développement des entreprises et l'optimisation des commerces de proximité.</p>
              <span className="material-symbols-outlined text-tertiary">arrow_right_alt</span>
            </div>
          </motion.div>
          {/* Placements Financiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-12 group relative overflow-hidden bg-background border border-tertiary/10 min-h-[250px] md:h-[300px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105" alt="Luxury retail facade" src="/assets/images/immo.png"/>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
            <div className="absolute left-0 h-full flex flex-col justify-center p-8 md:p-12 max-w-xl">
              <h3 className="font-display-lg text-[28px] md:text-display-lg text-on-surface mb-2">Marchés Financiers & Immo</h3>
              <p className="font-body-md text-sm md:text-body-md text-on-surface-variant">Conseils experts en placements financiers et stratégies d'investissement immobilier pour sécuriser et faire fructifier votre capital.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
