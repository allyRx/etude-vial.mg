import { useEffect } from 'react'
import type { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { usePathname } from './lib/router'
import { ROUTES } from './lib/routes'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  const pages: Record<string, ReactNode> = {
    [ROUTES.home]: <HomePage />,
    [ROUTES.about]: <AboutPage />,
    [ROUTES.services]: <ServicesPage />,
    [ROUTES.contact]: <ContactPage />,
  }

  const page = pages[pathname] || <NotFoundPage />

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      {page}
      <Footer />
    </div>
  )
}

export default App
