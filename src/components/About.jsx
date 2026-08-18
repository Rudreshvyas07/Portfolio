import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function About() {
  const [sectionRef, isVisible] = useIntersectionObserver()

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section ${isVisible ? 'visible' : ''}`}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hi! I&apos;m <span className="accent">Rudresh Vyas</span>, a passionate
          web developer and tech enthusiast from Nagpur.
        </p>
        <p>
          I&apos;m currently studying in the IT department at Government
          Polytechnic Nagpur. I love building web projects that solve real
          problems and have a clean, responsive design.
        </p>
        <p>
          I&apos;ve worked on hackathons like <strong>Enkryptia</strong> and
          enjoy working with HTML, CSS, JavaScript, and React. I&apos;m always
          eager to learn new technologies and improve my skills.
        </p>
        <p>
          In my free time, you&apos;ll find me exploring new gadgets, editing
          videos, or listening to music.
        </p>
      </div>
    </section>
  )
}
