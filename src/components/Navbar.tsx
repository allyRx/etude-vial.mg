import { motion } from 'framer-motion'
import InternalLink from './InternalLink'
import { ROUTES } from '../lib/routes'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/70 backdrop-blur-md dark:bg-surface/70 border-b border-outline-variant/30"
    >
      <div className="max-w-container-max mx-auto flex justify-between items-center px-margin-edge py-[16px]">
        <InternalLink to={ROUTES.home} className="inline-flex items-center">
          <img src="/assets/images/logo.png" alt="Étude Viale" className="h-10 w-auto object-contain" />
        </InternalLink>
        <div className="hidden md:flex gap-gutter items-center">
          <InternalLink className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors duration-animation-duration-slow ease-animation-curve" to={ROUTES.home}>Accueil</InternalLink>
          <InternalLink className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors duration-animation-duration-slow ease-animation-curve" to={ROUTES.about}>À Propos</InternalLink>
          <InternalLink className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors duration-animation-duration-slow ease-animation-curve" to={ROUTES.services}>Services</InternalLink>
          <InternalLink className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors duration-animation-duration-slow ease-animation-curve" to={ROUTES.contact}>Contact</InternalLink>
        </div>
        <InternalLink
          to={ROUTES.contact}
          className="bg-tertiary text-on-tertiary px-6 py-2 font-label-caps text-label-caps hover:bg-tertiary-fixed transition-all duration-animation-duration-fast uppercase tracking-widest"
        >
          Consultation
        </InternalLink>
      </div>
    </motion.nav>
  )
}

export default Navbar
