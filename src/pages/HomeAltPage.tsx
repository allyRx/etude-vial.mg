import { motion } from 'framer-motion'
import InternalLink from '../components/InternalLink'
import { ROUTES } from '../lib/routes'

const AnimatedText = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const words = text.split(' ')
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

const HomeAltPage = () => {
  const sections = [
    {
      label: "L'ÉLITE DU CONSEIL",
      phrase: "Optimisez votre Capital. Maîtrisez votre Croissance.",
      bg: "bg-surface",
      color: "text-on-surface",
      img: "/assets/images/hero.png",
      overlay: "bg-background/60 backdrop-blur-[2px]"
    },
    {
      label: "INGÉNIERIE FINANCIÈRE",
      phrase: "Votre argent doit travailler pour vous, pas l'inverse.",
      bg: "bg-surface-container-lowest",
      color: "text-on-surface",
      serif: true,
      accent: "text-tertiary"
    },
    {
      label: "IMMOBILIER DE PRESTIGE",
      phrase: "Transformez la pierre en stratégie de rendement.",
      bg: "bg-[#050505]",
      color: "text-on-tertiary",
      img: "/assets/images/immo.png",
      overlay: "bg-black/70",
      italic: true
    },
    {
      label: "EXCELLENCE OPÉRATIONNELLE",
      phrase: "Identifiez vos blocages. Libérez vos profits.",
      bg: "bg-surface-container",
      color: "text-on-surface",
      img: "/assets/images/res.png",
      overlay: "bg-white/90 mix-blend-screen"
    },
    {
      label: "HÔTELLERIE & GASTRONOMIE",
      phrase: "L'excellence au service de votre rentabilité.",
      bg: "bg-surface",
      color: "text-on-surface",
      img: "/assets/images/hot.png",
      overlay: "bg-background/40 backdrop-blur-sm",
      serif: true
    },
    {
      label: "STRATÉGIE ACTIONNELLE",
      phrase: "Prêt à définir votre prochaine époque ?",
      bg: "bg-tertiary",
      color: "text-on-tertiary",
      isCTA: true
    }
  ]

  return (
    <main className="w-full">
      {sections.map((section, index) => (
        <section 
          key={index} 
          className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-margin-edge text-center sticky top-0 ${section.bg} overflow-hidden`}
        >
          {section.img && (
            <div className="absolute inset-0 z-0">
              <img src={section.img} className="w-full h-full object-cover grayscale opacity-50" alt={section.label} />
              <div className={`absolute inset-0 ${section.overlay}`}></div>
            </div>
          )}
          
          <div className="relative z-10 max-w-6xl">
            <AnimatedText 
              text={section.label} 
              className="font-label-caps text-[10px] md:text-label-caps uppercase tracking-[0.6em] mb-12 block opacity-60 justify-center" 
            />
            <AnimatedText 
              text={section.phrase} 
              className={`font-display-xl text-[44px] sm:text-[60px] md:text-[90px] leading-[1.05] ${section.color} justify-center ${section.serif ? 'font-serif italic' : ''} ${section.italic ? 'italic font-light' : ''}`}
            />
            
            {section.isCTA && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-20"
              >
                <InternalLink
                  to={ROUTES.contact}
                  className="bg-on-tertiary text-tertiary px-16 py-6 font-label-caps text-xl hover:bg-surface hover:text-on-surface transition-all duration-500 inline-block shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                  DÉMARRER LE BRIEFING
                </InternalLink>
              </motion.div>
            )}
          </div>
          
          {/* Subtle line at bottom */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
            <div className="w-px h-20 bg-current"></div>
          </div>
        </section>
      ))}
    </main>
  )
}

export default HomeAltPage
