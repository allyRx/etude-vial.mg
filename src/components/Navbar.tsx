import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import InternalLink from './InternalLink'
import { ROUTES } from '../lib/routes'
import { usePathname } from '../lib/router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Fermer le menu lors du changement de page
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Empêcher le défilement quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { to: ROUTES.home, label: 'Accueil' },
    { to: ROUTES.services, label: 'Services' },
    { to: ROUTES.about, label: 'À Propos' },
    { to: ROUTES.contact, label: 'Contact' },
  ]

  return (
    <>
      {/* Barre de navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 w-full z-[100] bg-surface/90 backdrop-blur-md border-b border-outline-variant/30"
      >
        <div className="max-w-container-max mx-auto flex justify-between items-center px-6 md:px-margin-edge py-4">
          {/* Logo */}
          <InternalLink to={ROUTES.home} className="inline-flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="Étude Viale"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </InternalLink>

          {/* Navigation Desktop */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <InternalLink
                key={link.to}
                className={`font-body-md text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
                  pathname === link.to ? 'text-tertiary' : 'text-on-surface-variant hover:text-tertiary'
                }`}
                to={link.to}
              >
                {link.label}
              </InternalLink>
            ))}
          </div>

          {/* Bouton Consultation (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-4">
            <InternalLink
              to={ROUTES.contact}
              className="hidden lg:block bg-tertiary text-on-tertiary px-6 py-2 font-label-caps text-label-caps hover:opacity-80 transition-opacity uppercase tracking-widest text-sm"
            >
              Consultation
            </InternalLink>

            {/* Bouton Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-[6px] md:hidden focus:outline-none"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8, width: '28px' } : { rotate: 0, y: 0, width: '28px' }}
                className="h-[2px] bg-on-surface block rounded-full"
                style={{ width: '28px' }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="h-[2px] bg-on-surface block rounded-full"
                style={{ width: '20px' }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8, width: '28px' } : { rotate: 0, y: 0, width: '28px' }}
                className="h-[2px] bg-on-surface block rounded-full"
                style={{ width: '28px' }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile — en dehors du nav pour éviter les conflits de z-index */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[90] bg-surface flex flex-col pt-24 md:hidden"
          >
            {/* Fond décoratif */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-tertiary blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-tertiary blur-3xl" />
            </div>

            <div className="relative flex flex-col items-center justify-center flex-1 gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="w-full max-w-xs"
                >
                  <InternalLink
                    to={link.to}
                    className={`block text-center py-4 text-3xl font-serif italic border-b border-outline-variant/20 transition-colors duration-200 ${
                      pathname === link.to
                        ? 'text-tertiary border-tertiary/40'
                        : 'text-on-surface hover:text-tertiary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </InternalLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.05 * navLinks.length + 0.1 }}
                className="mt-6 w-full max-w-xs"
              >
                <InternalLink
                  to={ROUTES.contact}
                  className="block w-full text-center bg-tertiary text-on-tertiary py-4 font-label-caps text-sm uppercase tracking-[0.25em] hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Consultation Privée
                </InternalLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
