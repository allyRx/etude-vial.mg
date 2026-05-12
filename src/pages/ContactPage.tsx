import { motion } from 'framer-motion'

const officeBlocks = [
  {
    city: 'Antananarivo',
    address: 'Antananarivo, Madagascar',
    coords: '18.9101° S, 47.5362° E',
  },
]

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <main className="bg-surface text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[500px] md:min-h-[716px] flex flex-col justify-center pt-24 md:pt-20 border-b border-outline-variant/10 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover grayscale"
            alt="Contactez le cabinet de conseil Étude Viale"
            src="/assets/images/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </motion.div>
        <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-edge w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl text-center mx-auto"
          >
            <motion.span variants={itemVariants} className="font-label-caps text-[10px] md:text-label-caps text-tertiary block mb-6 uppercase tracking-[0.4em]">
              Contactez-Nous
            </motion.span>
            <motion.h1 variants={itemVariants} className="font-display-lg text-[32px] md:text-display-lg mb-8 leading-tight">
              Parlons de Votre Projet
            </motion.h1>
            <motion.p variants={itemVariants} className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Que vous souhaitiez un conseil en placement, un accompagnement pour développer votre entreprise ou simplement en savoir plus sur nos services, notre équipe est à votre écoute.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Formulaire + Coordonnées */}
      <section className="max-w-container-max mx-auto px-6 md:px-margin-edge py-20 md:py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">
        {/* Formulaire */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="glass-panel p-8 md:p-12 shadow-2xl">
            <h2 className="font-display-lg text-[28px] md:text-headline-md mb-4 leading-tight">Demande de Consultation</h2>
            <p className="font-body-md text-sm text-on-surface-variant mb-10 leading-relaxed">
              Remplissez ce formulaire et un consultant vous contactera dans les 24h pour un premier échange sans engagement.
            </p>
            <form className="space-y-8 md:space-y-12">
              {[
                { label: 'Nom complet', placeholder: 'Votre nom et prénom', type: 'text' },
                { label: 'Entreprise / Organisation', placeholder: 'Nom de votre structure (facultatif)', type: 'text' },
              ].map((field, i) => (
                <motion.div 
                  key={field.label} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="relative"
                >
                  <label className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase mb-4 block">
                    {field.label}
                  </label>
                  <input
                    className="w-full bg-transparent input-underline py-4 font-body-lg text-lg md:text-body-lg text-on-surface placeholder:text-outline-variant/30 focus:ring-0"
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                </motion.div>
              ))}

              {/* Objet de la demande */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <label className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase mb-4 block">
                  Objet de votre demande
                </label>
                <select className="w-full bg-transparent input-underline py-4 font-body-lg text-lg md:text-body-lg text-on-surface focus:ring-0 appearance-none cursor-pointer">
                  <option value="" className="bg-surface">Sélectionnez un domaine</option>
                  <option value="finance" className="bg-surface">Conseil en marché financier</option>
                  <option value="immobilier" className="bg-surface">Investissement immobilier</option>
                  <option value="entreprise" className="bg-surface">Développement d'entreprise</option>
                  <option value="hotellerie" className="bg-surface">Hôtellerie & Restauration</option>
                  <option value="autre" className="bg-surface">Autre</option>
                </select>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <label className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase mb-4 block">
                  Décrivez votre besoin
                </label>
                <textarea
                  className="w-full bg-transparent input-underline py-4 font-body-lg text-lg md:text-body-lg text-on-surface placeholder:text-outline-variant/30 focus:ring-0 resize-none"
                  placeholder="Expliquez-nous votre situation et vos objectifs..."
                  rows={4}
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <button
                  type="submit"
                  className="group flex items-center gap-4 bg-tertiary text-on-tertiary px-10 py-4 font-label-caps text-xs md:text-label-caps uppercase tracking-widest hover:bg-tertiary-fixed-dim transition-all duration-500"
                >
                  Envoyer ma demande
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">
                    arrow_right_alt
                  </span>
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Coordonnées */}
        <div className="lg:col-span-5 flex flex-col gap-8 md:gap-gutter">
          {/* Contacts directs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8"
          >
            <h3 className="font-label-caps text-sm md:text-label-caps text-tertiary mb-8 uppercase tracking-[0.2em]">
              Nous Joindre Directement
            </h3>
            <div className="space-y-6">
              {[
                { icon: 'mail', label: 'Email', val: 'vial.madagascar@gmail.com' },
                { icon: 'call', label: 'Téléphone', val: '038 48 984 79' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#d8c4a2", color: "#0b1324" }}
                    className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-tertiary transition-all duration-300 flex-shrink-0"
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </motion.div>
                  <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="font-body-md text-sm md:text-body-md group-hover:text-tertiary transition-colors">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Adresse */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 flex-grow"
          >
            <h3 className="font-label-caps text-sm md:text-label-caps text-tertiary mb-8 uppercase tracking-[0.2em]">
              Notre Adresse
            </h3>
            <div className="space-y-8 md:space-y-10">
              {officeBlocks.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="border-l border-tertiary/30 pl-6 group cursor-default"
                >
                  <h4 className="font-headline-sm text-xl md:text-[24px] mb-2 group-hover:text-tertiary transition-colors">{office.city}</h4>
                  <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-2">{office.address}</p>
                  <p className="font-label-caps text-[10px] text-outline tracking-widest opacity-50">{office.coords}</p>
                </motion.div>
              ))}
            </div>

            {/* Horaires */}
            <div className="mt-10 pt-8 border-t border-outline-variant/20">
              <h4 className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest mb-4">Disponibilité</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-on-surface-variant">
                  <span>Lundi – Vendredi</span>
                  <span>08h00 – 17h00</span>
                </div>
                <div className="flex justify-between text-sm text-on-surface-variant">
                  <span>Samedi</span>
                  <span>08h00 – 12h00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Domaines rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-panel p-8"
          >
            <h3 className="font-label-caps text-sm md:text-label-caps text-tertiary mb-6 uppercase tracking-[0.2em]">
              Nos Domaines
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Marchés Financiers', 'Immobilier', 'Développement d\'Entreprise', 'Hôtellerie', 'Restauration', 'Commerce'].map((tag) => (
                <span key={tag} className="text-xs font-label-caps uppercase tracking-wider border border-outline-variant/30 px-3 py-2 text-on-surface-variant hover:border-tertiary hover:text-tertiary transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Citation finale */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full h-[350px] md:h-[500px] relative overflow-hidden group"
          >
            <img
              className="w-full h-full object-cover grayscale brightness-50 transition-transform duration-[3000ms] group-hover:scale-110"
              alt="Cabinet Étude Viale"
              src="/assets/images/com.png"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="max-w-2xl text-center px-8"
              >
                <p className="font-display-lg text-[24px] md:text-display-lg leading-tight italic opacity-90 text-on-surface">
                  "Nous ne donnons pas des conseils génériques. Nous comprenons votre réalité, et nous vous aidons à la transformer."
                </p>
                <div className="mt-8 h-px w-24 bg-tertiary mx-auto opacity-50" />
                <p className="mt-4 font-label-caps text-[10px] text-tertiary uppercase tracking-widest opacity-70">
                  — L'équipe Étude Viale
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
