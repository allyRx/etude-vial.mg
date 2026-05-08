import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale opacity-40"
          alt="A low-angle shot of a majestic, modern glass and steel skyscraper reaching toward a dark twilight sky."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-1p1PV2UWSfp5Y-UmggdRYlqcfg47S9yQomafOwhkLkHi88lOc65uUPFMFnXpu7fmy7IOBVwUCU3iEdBdnf1fEDnY_DnCtzIiDCIbHiliVtZUTUb6yWiEztYp7Ygu7CvjY4An-V8kexJ6ns8nOo23JDqo7RHe9HanpBt8KRYPCoh-Zcq_P-fwO9OJw2jf64jV7NBegYIlZH3ZKEMyrIAWODMjJT24BCGuVDXmNMt3-mA0QnV3Ws92Sf__OY-MvZ0gmntcH3oOVLI"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-edge text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-gutter inline-block px-4 py-1 border border-tertiary/30 rounded-full"
        >
          <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.3em]">Conseil Stratégique de Haute Volée</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display-xl text-display-xl text-on-surface leading-tight mb-8"
        >
          Raffiner la <span className="italic font-light text-stroke">Complexité</span> <br/>en Stratégie
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
        >
          Nous fusionnons la rigueur analytique et l'élégance architecturale pour sculpter des trajectoires de croissance pérennes au cœur des marchés les plus exigeants.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-gutter"
        >
          <button className="bg-tertiary text-on-tertiary px-10 py-4 font-label-caps text-label-caps hover:scale-105 transition-all">
            EXPLORER NOTRE VISION
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
