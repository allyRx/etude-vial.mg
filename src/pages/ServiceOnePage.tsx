import { motion } from 'framer-motion'
import InternalLink from '../components/InternalLink'
import { ROUTES } from '../lib/routes'

const ServiceOnePage = () => {
  return (
    <main className="w-full bg-surface">
      {/* Section 1: Dark, Bold, Stroke effect */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tertiary/20 via-transparent to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h2 className="font-display-xl text-[60px] md:text-[140px] leading-none mb-4 text-stroke opacity-30 select-none uppercase">RENTABILITÉ</h2>
          <h2 className="font-display-xl text-[50px] md:text-[100px] leading-tight text-on-tertiary uppercase tracking-tighter">
            Vision <span className="italic font-light text-tertiary">Concrète</span>.
          </h2>
          <p className="font-label-caps text-tertiary mt-8 tracking-[0.6em]">Étude Viale — Conseil Élite</p>
        </motion.div>
      </section>

      {/* Section 2: Split Layout, Image & Serif Typography */}
      <section className="min-h-screen flex flex-col md:flex-row items-center bg-surface-container-lowest">
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
          <img src="/assets/images/immo.png" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Immo" />
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-tertiary font-label-caps mb-8 block">PATRIMOINE</span>
            <h2 className="font-serif italic text-[40px] md:text-[80px] leading-tight text-on-surface">
              Votre capital doit <span className="font-sans not-italic font-bold text-tertiary underline decoration-1 underline-offset-8">Conquérir</span> de nouveaux sommets.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Section 3: High Contrast, Gradient Text */}
      <section className="min-h-screen flex items-center justify-center bg-on-surface px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="max-w-6xl"
        >
          <h2 className="font-display-xl text-[44px] md:text-[120px] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-on-tertiary to-tertiary uppercase tracking-tighter">
            Domination <br /> Patrimoniale.
          </h2>
          <p className="text-surface-container-highest mt-12 font-body-lg text-xl md:text-2xl max-w-2xl mx-auto opacity-70">
            L'immobilier n'est pas un achat, c'est une arme stratégique de valorisation.
          </p>
        </motion.div>
      </section>

      {/* Section 4: Minimalist, Glassmorphism on Image */}
      <section className="min-h-screen relative flex items-center px-6 md:px-24 overflow-hidden">
        <img src="/assets/images/res.png" className="absolute inset-0 w-full h-full object-cover brightness-[0.2]" alt="Audit" />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 glass-panel p-10 md:p-20 border-l-8 border-tertiary max-w-4xl"
        >
          <h2 className="font-display-lg text-[32px] md:text-[70px] leading-tight text-white mb-8">
            Diagnostic <span className="text-tertiary italic">Chirurgical</span>.
          </h2>
          <p className="font-body-lg text-white/80 text-lg md:text-xl leading-relaxed">
            La première étape vers l'excellence de votre entreprise passe par une analyse froide et sans compromis de votre réalité.
          </p>
        </motion.div>
      </section>

      {/* Section 5: The "Big" Call to Action */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-tertiary text-on-tertiary px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl"
        >
          <span className="font-label-caps mb-12 block tracking-[1em] opacity-60">PERFORMANCE ABSOLUE</span>
          <h2 className="font-display-xl text-[50px] md:text-[130px] leading-none mb-16 tracking-tighter uppercase">
            Visons le <span className="italic font-light text-stroke-white text-transparent">Maximum</span>.
          </h2>
          <InternalLink
            to={ROUTES.contact}
            className="bg-on-tertiary text-tertiary px-16 py-6 font-label-caps text-label-caps hover:bg-surface hover:text-on-surface transition-all duration-500 inline-block text-xl tracking-[0.2em]"
          >
            DÉMARRER MAINTENANT
          </InternalLink>
        </motion.div>
      </section>
    </main>
  )
}

export default ServiceOnePage
