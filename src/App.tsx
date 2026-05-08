import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import DomainFocus from './components/DomainFocus'
import StrategicServices from './components/StrategicServices'
import Expertise from './components/Expertise'
import Philosophy from './components/Philosophy'
import Intelligence from './components/Intelligence'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <DomainFocus />
        <StrategicServices />
        <Expertise />
        <Philosophy />
        <Intelligence />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
