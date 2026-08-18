import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Services.css'
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiSupabase,
  SiMysql,
  SiC,
  SiCplusplus,
  SiPython,
  SiFlask,
  SiR,
  SiLinux,
  SiGit,
  SiGithub,
  SiDocker,
} from 'react-icons/si'

import { FaCss3Alt } from 'react-icons/fa'

const services = [
  { title: 'HTML', icon: <SiHtml5 /> },
  { title: 'CSS', icon: <FaCss3Alt /> },
  { title: 'JavaScript', icon: <SiJavascript /> },
  { title: 'React', icon: <SiReact /> },
  { title: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { title: 'MongoDB', icon: <SiMongodb /> },
  { title: 'MySQL', icon: <SiMysql /> },
  { title: 'C', icon: <SiC /> },
  { title: 'C++', icon: <SiCplusplus /> },
  { title: 'Python', icon: <SiPython /> },
  { title: 'Linux', icon: <SiLinux /> },
  { title: 'Git', icon: <SiGit /> },
  { title: 'GitHub', icon: <SiGithub /> },

]

export default function Services() {
  const [sectionRef, isVisible] = useIntersectionObserver()

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`services-section ${isVisible ? 'visible' : ''}`}
    >
      <h2>Skills</h2>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
