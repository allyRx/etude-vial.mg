import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/70 backdrop-blur-md dark:bg-surface/70 border-b border-outline-variant/30"
    >
      <div className="max-w-container-max mx-auto flex justify-between items-center px-margin-edge py-[16px]">
        <img src="/assets/images/logo.png" alt="Étude Viale" className="h-10 w-auto object-contain" />
        <div className="hidden md:flex gap-gutter items-center">
          <a className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary transition-colors duration-animation-duration-slow ease-animation-curve" href="#">Accueil</a>
        </div>
        <button className="bg-tertiary text-on-tertiary px-6 py-2 font-label-caps text-label-caps hover:bg-tertiary-fixed transition-all duration-animation-duration-fast uppercase tracking-widest">
          Consultation
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
