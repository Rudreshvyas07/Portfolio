import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Projects from './components/Projects'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={`app ${loading ? 'app--loading' : ''}`}>
        <Header />
        <main>
          <Hero />
          <hr className="divider" />
          <WorkExperience />
          <About />
          <Services />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}
