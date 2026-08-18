import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const experiences = [
  {
    image: '/enkry.jpg',
    alt: 'Enkryptia logo',
    title: 'Organizer in Enkryptia (2023–2024)',
    description:
      'Enkryptia was a 24-hour hackathon hosted by the IT Department at Government Polytechnic Nagpur. It included all amenities and problem statements, with a ₹30K prize pool. A grand, well-organized tech event!',
  },
  {
    image: '/enkry.jpg',
    alt: 'Enkryptia logo',
    title: 'Chairman of InfoCom 2k26',
    description:
      'InfoCom is a official Committee of IT Department of Government Polytechnic Nagpur. It is a platform for students to showcase their skills and talents.Under this , we organize enkryptia , it includes events like hackathon , MUN , etc.',
  },
 
]

export default function Projects() {
  const [sectionRef, isVisible] = useIntersectionObserver()

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`work-section ${isVisible ? 'visible' : ''}`}
    >
      <span className="text-grey">What I have done so far</span>
      <h2>Work Experience</h2>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <article key={exp.title} className="experience-card">
            <img className="experience-logo" src={exp.image} alt={exp.alt} />
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-desc">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
