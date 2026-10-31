import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServiceApplication from './components/ServiceApplication'
import PrivacyNotice from './components/PrivacyNotice'
import useHashRoute from './hooks/useHashRoute'

export default function App() {
  const route = useHashRoute()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2">Skip to content</a>
      <Navbar />
      <main id="main">
        {route === 'apply' ? <ServiceApplication /> : route === 'privacy' ? <PrivacyNotice /> : (
          <>
            <Hero /><About /><Services /><Achievements /><Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
