import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import InternalLink from './InternalLink';
import { ROUTES } from '../lib/routes';

const sections = [
  {
    id: 'hero',
    label: 'Conseil Stratégique de Haute Volée',
    title: 'Optimisez votre Capital et forgez votre Croissance',
    description: 'Étude Viale transforme vos problématiques complexes en leviers de performance durable. Nous accompagnons les investisseurs et les entreprises dans l\'hôtellerie, la gastronomie et l\'immobilier avec une vision de précision.',
    image: '/assets/images/hero.png',
    accent: 'text-tertiary',
    bgMix: 'bg-background/40',
    titleFont: 'font-display-xl',
    align: 'center'
  },
  {
    id: 'mission',
    label: 'Notre Manifeste',
    title: 'Cibler les enjeux, concevoir le futur',
    description: 'Une immersion profonde dans vos opérations pour identifier les points de friction invisibles. Nous instaurons une efficacité opérationnelle sans compromis pour sécuriser vos actifs.',
    image: '/assets/images/inte.png',
    accent: 'text-primary',
    bgMix: 'bg-surface-container/60',
    titleFont: 'font-serif italic font-light',
    align: 'left'
  },
  {
    id: 'expertise',
    label: 'Vision Sectorielle',
    title: 'L\'excellence au service de l\'industrie',
    description: 'Notre expertise traverse les frontières de l\'Hôtellerie, de l\'Immobilier et de la Gastronomie. Une approche analytique sur mesure pour chaque domaine stratégique.',
    image: '/assets/images/hot.png',
    accent: 'text-secondary',
    bgMix: 'bg-background/60',
    titleFont: 'font-display-xl tracking-tight',
    align: 'right'
  },
  {
    id: 'intelligence',
    label: 'Intelligence Stratégique',
    title: 'La donnée comme boussole décisionnelle',
    description: 'Modélisation financière avancée et analyse prédictive pour sécuriser vos investissements les plus audacieux. Nous donnons du sens à la complexité.',
    image: '/assets/images/entre.png',
    accent: 'text-tertiary',
    bgMix: 'bg-surface-container-lowest/80',
    titleFont: 'font-display-xl uppercase',
    align: 'left'
  },
  {
    id: 'engagement',
    label: 'Engagement Durable',
    title: 'Bâtir des relations de confiance',
    description: 'Au-delà du simple conseil, nous forgeons des partenariats basés sur l\'intégrité, la transparence et la performance partagée sur le long terme.',
    image: '/assets/images/res.png',
    accent: 'text-secondary',
    bgMix: 'bg-background/80',
    titleFont: 'font-serif italic',
    align: 'right'
  }
];

const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-background">
      {/* Sticky Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {sections.map((section, index) => {
          const start = index / sections.length;
          const end = (index + 1) / sections.length;
          
          const opacity = useTransform(
            smoothScroll,
            [index === 0 ? 0 : start - 0.05, start + 0.05, end - 0.05, end],
            [1, 1, 1, 0]
          );

          const scale = useTransform(
            smoothScroll,
            [start, end],
            [1.05, 1.01]
          );

          const blur = useTransform(
            smoothScroll,
            [index === 0 ? 0 : start - 0.1, start, end - 0.1, end],
            ["blur(0px)", "blur(0px)", "blur(0px)", "blur(8px)"]
          );

          return (
            <motion.div
              key={section.id}
              style={{ opacity, scale, filter: blur }}
              className="absolute inset-0 z-0"
            >
              <img
                src={section.image}
                alt={section.id}
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className={`absolute inset-0 ${section.bgMix} backdrop-none transition-colors duration-1000`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </motion.div>
          );
        })}
        
        {/* Dynamic Grain and Grid */}
        <div className="absolute inset-0 film-grain opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
      </div>

      {/* Content Layers */}
      <div className="relative z-10">
        {sections.map((section, index) => {
          const start = index / sections.length;
          const end = (index + 1) / sections.length;

          // No more y-transform for text to keep it stable
          const opacity = useTransform(
            smoothScroll,
            [start, start + 0.05, end - 0.05, end],
            [index === 0 ? 1 : 0, 1, 1, 0]
          );

          const alignmentClass = 
            section.align === 'left' ? 'text-left items-start md:pl-20' :
            section.align === 'right' ? 'text-right items-end md:pr-20 ml-auto' :
            'text-center items-center mx-auto';

          return (
            <section
              key={section.id}
              className="h-screen flex items-center px-6 md:px-margin-edge"
            >
              <motion.div
                style={{ opacity }}
                className={`max-w-4xl flex flex-col ${alignmentClass}`}
              >
                <motion.span 
                  className="font-label-caps text-label-caps text-tertiary uppercase mb-6 block tracking-[0.3em]"
                >
                  {section.label}
                </motion.span>
                
                <h2 className={`${section.titleFont} text-[48px] sm:text-[64px] md:text-display-xl text-on-surface leading-tight mb-8 tracking-tighter text-shadow-premium`}>
                  {section.title}
                </h2>

                <p className={`font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed`}>
                  {section.description}
                </p>

                {index === 0 && (
                  <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16 py-8 border-y border-tertiary/10">
                    <div className="text-center">
                      <span className="block text-2xl font-serif text-tertiary">12B€</span>
                      <span className="text-[10px] uppercase tracking-widest opacity-60">Actifs Conseillés</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-2xl font-serif text-tertiary">94%</span>
                      <span className="text-[10px] uppercase tracking-widest opacity-60">Rétention Client</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-2xl font-serif text-tertiary">15+</span>
                      <span className="text-[10px] uppercase tracking-widest opacity-60">Secteurs Clés</span>
                    </div>
                  </div>
                )}

                <div className={`flex flex-col sm:flex-row gap-8`}>
                  {index === 0 ? (
                    <InternalLink
                      to={ROUTES.services}
                      className="bg-tertiary text-on-tertiary px-12 py-5 font-label-caps text-label-caps hover:scale-105 transition-all"
                    >
                      DÉCOUVRIR L'EXPERTISE
                    </InternalLink>
                  ) : index === sections.length - 1 ? (
                    <InternalLink
                      to={ROUTES.contact}
                      className="border border-tertiary text-tertiary px-12 py-5 font-label-caps text-label-caps hover:bg-tertiary hover:text-on-tertiary transition-all"
                    >
                      NOUS CONTACTER
                    </InternalLink>
                  ) : null}
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Progress Sidebar */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8">
        {sections.map((section, index) => {
          const start = index / sections.length;
          const end = (index + 1) / sections.length;
          
          return (
            <div key={index} className="group flex items-center gap-4 cursor-pointer">
              <div className="relative w-1 h-12 bg-outline-variant/30 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-tertiary origin-top"
                  style={{
                    scaleY: useTransform(smoothScroll, [start, end], [0, 1])
                  }}
                />
              </div>
              <motion.span 
                style={{
                  opacity: useTransform(smoothScroll, [start - 0.05, start, end, end + 0.05], [0.3, 1, 1, 0.3])
                }}
                className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest vertical-text opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {section.id}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollStory;
