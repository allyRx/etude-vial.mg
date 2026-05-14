import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="py-20 md:py-section-gap px-6 md:px-margin-edge max-w-container-max mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="font-label-caps text-label-caps text-tertiary uppercase mb-6 md:mb-8 block">Notre Vision</span>
        <h2 className="font-display-lg text-[40px] md:text-display-lg text-on-surface mb-8 md:mb-12 leading-tight">
          Cibler l'obstacle, <br/> concevoir la solution.
        </h2>
        <div className="h-1 w-20 md:w-24 bg-tertiary mb-8 md:mb-12 mx-auto"></div>
        <p className="font-body-lg text-lg md:text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          Nous identifions les points de friction de votre entreprise pour instaurer une efficacité opérationnelle et financière durable.
        </p>
      </motion.div>
    </section>
  );
};

export default Mission;
