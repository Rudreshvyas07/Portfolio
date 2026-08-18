import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const experiences = [
  {
    image: '/crm.png',
    alt: 'Enkryptia logo',
    title: 'Customer Relationship Management System',
    description:
      'Contributed to the development of a Customer Relationship Management (CRM) system, as a full stack developer during my internship at Accurate Solutions.',  
    url : 'https://crm.perpetualsolutions.co.in//',
    },
    ,
  {
    image: '/vs.png',
    alt: 'Enkryptia logo',
    title: 'E-commerce Website',
    description:
      'Worked as a backend developer in a team of 4 people and using node.js as a backend technology.',
  url : 'https://vastraverse-online-clothing-shopping-ye1e.onrender.com/',  
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
     
      <h2>Projects</h2>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <article key={exp.title} className="experience-card">
            <img className="experience-logo" src={exp.image} alt={exp.alt} />
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-desc">{exp.description}</p>
     <button
  onClick={() => window.open(exp.url, '_blank')}
  className="mt-4 bg-green-500 text-black rounded-full px-4 py-2 text-sm leading-none hover:bg-green-400 transition"
>
  View Project
</button>
          </article>
        ))}
      </div>
    </section>
  )
}
