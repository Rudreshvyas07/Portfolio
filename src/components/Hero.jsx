import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Hero() {
  const typedRef = useRef(null)
  const [sectionRef, isVisible] = useIntersectionObserver()

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Developer', 'Problem Solver', 'Tech Enthusiast'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    })

    return () => typed.destroy()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`hero ${isVisible ? 'visible' : ''}`}
      id="home"
    >
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, My name is <span className="accent">Rudresh</span>
        </h1>
        <p className="hero-subtitle">
          and I am a passionate <span ref={typedRef} className="typed-text" />
        </p>
        <div className="buttons">
          <button
            className="btn"
            onClick={() => window.open('/rudresume.pdf', '_blank')}
          >
            Download Resume
          </button>
          <button
            className="btn"
            onClick={() =>
              window.open('https://github.com/Rudreshvyas07', '_blank')
            }
          >
            Visit GitHub
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src="/dev.png" alt="Developer Illustration" />
      </div>
    </section>
  )
}
