import { motion } from 'framer-motion';

const Expertise = () => {
  return (
    <section className="bg-surface-container-lowest py-section-gap">
      <div className="px-margin-cinematic max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-label-caps text-tertiary mb-4 block uppercase">Expertise Sectorielle</span>
            <h2 className="font-display-lg text-display-lg text-on-surface">Domaines d'Influence</h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label-caps text-on-surface-variant border-b border-tertiary/40 pb-2 hover:text-tertiary transition-all"
            href="#"
          >
            Consulter les secteurs
          </motion.a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[800px]">
          {/* Hôtellerie & Restauration */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 group relative overflow-hidden bg-background border border-tertiary/10"
          >
            <img className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-transform duration-1000 group-hover:scale-105" alt="Luxury hotel lobby" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqBLLpfXnL0ywYYE3MPwNsvn5fNI5jw38cEZo8n5FRoTS5ujw1rq00Eji-jC3g49P2VPQwcu61r41tfz8ja781CFtUBAXWXDQ1F4kh47dM_EcvIHhpZNf_1nuU8qaFAWgjpnoBoHpRijbkmcApkaPr8y8UZnXmUR07NFFL0Ah1yQcoh1bjwYK07bQzxeV8iqotVrhjU9liS6jbJnwJs0x1sMjiXrJ8O47v2Hr6mojmOnNKPt7Rsmr1aXba_ySqqgIOKcd4t5heZrY"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-12 w-full">
              <h3 className="font-display-lg text-on-surface mb-4">Hôtellerie & Gastronomie</h3>
              <p className="font-body-md text-on-surface-variant max-w-md mb-8">Audit de performance et résolution de problématiques opérationnelles pour les établissements hôteliers et de restauration.</p>
              <span className="material-symbols-outlined text-tertiary">arrow_right_alt</span>
            </div>
          </motion.div>
          {/* Entreprises & Commerce */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 group relative overflow-hidden bg-background border border-tertiary/10"
          >
            <img className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-transform duration-1000 group-hover:scale-105" alt="Gourmet presentation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXdjADRjhiFVXqQI2MT-O_jF8lzCqaBJGAu5SlZBCZoJWCyx5TTMk3LkmzVEb6LU6ocKQrwq4iW3PNaTOuCkMJ3Zwte0sw7PInnW96FhHC35tm2BHN__VWwAMFEQupaxMuReMzwIj7ZVpMXtn-tt-FfVnfncB2kDTHzVxoZKrVqWu8kyv_BsDRp40vRY7VOs9-Bovh3uTC5hpc0rCRQSy73ePqQ8FYMEqoIW9Ts5ipjjOCJ-EfYhx8EWnEuTSg0N8rQ-Depl1LE4o"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-12">
              <h3 className="font-headline-md text-on-surface mb-4">Entreprises & Commerce</h3>
              <p className="text-on-surface-variant text-sm mb-6">Accompagnement stratégique pour le développement des entreprises et l'optimisation des commerces de proximité.</p>
              <span className="material-symbols-outlined text-tertiary">arrow_right_alt</span>
            </div>
          </motion.div>
          {/* Placements Financiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-12 group relative overflow-hidden bg-background border border-tertiary/10 h-[300px]"
          >
            <img className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105" alt="Luxury retail facade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqiQQkQp4bMrSN0SRF_PNRx0ZfFKFq2KmAYxl3UuRenlXluAlsyH6IUyLMubN9Sq_45uicUDyPsp1nqSQfCwq9tsGcfjVVzJd84g3qBFsvMufk3GME-86ww0ld2uyzdOKj0kOx7MiM-tItRrqn-cI4UfbN-7vV8Kq6BLlg4L1zgVYleoKnhrEfhCW_P1dQ2ERUwX55Yq5wo0YeBVKVbKAnhn_0z3KsHHPvEQb9AAzvfEuhS389lCl3aVyXiHdTvzdZCeliUR9OFjE"/>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
            <div className="absolute left-0 h-full flex flex-col justify-center p-12 max-w-xl">
              <h3 className="font-display-lg text-on-surface mb-2">Marchés Financiers & Immo</h3>
              <p className="font-body-md text-on-surface-variant">Conseils experts en placements financiers et stratégies d'investissement immobilier pour sécuriser et faire fructifier votre capital.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
