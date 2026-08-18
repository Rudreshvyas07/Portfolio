import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const experiences = [
  {
    image: '/enkry.jpg',
    alt: 'Enkryptia logo',
    period: '2023',
    title: 'Organizer, Enkryptia',
    description: '24-hr hackathon, ₹30K prize pool.',
  },
  {
    image: '/enkry.jpg',
    alt: 'Enkryptia logo',
    period: '2026',
    title: 'Chairman, InfoCom 2k26',
    description: 'Runs Enkryptia, MUN & more.',
  },
  {
    image: '/ac.png',
    alt: 'Enkryptia logo',
    period: '2025',
    title: 'Web Developer Intern',
    description: 'Intern for 3 months, developed web applications.',
  },
]

// Cycles through so any number of entries stays on-brand
const palette = ['#f59e0b', '#14b8a6', '#f43f5e', '#84cc16', '#3b82f6', '#06b6d4']

export default function WorkExperience() {
  const [sectionRef, isVisible] = useIntersectionObserver()

  return (
    <section ref={sectionRef} className="py-10 px-4 sm:px-6">
     <div className="text-center">
  <span className="text-sxl text-neutral-400">What I have done so far</span>
  <h2 className="text-3xl font-bold mt-1 mb-7">Work Experience</h2>
</div>
      <div
        className="overflow-x-auto scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div
          className="grid px-2"
          style={{
            gridTemplateColumns: `repeat(${experiences.length}, minmax(104px, 1fr))`,
            gridTemplateRows: 'auto auto auto',
            minWidth: `${Math.max(experiences.length * 110, 320)}px`,
          }}
        >
          {/* shared horizontal line, sits in the middle row across all columns */}
          <div
            className="row-start-2 self-center h-0.5 bg-neutral-400/25"
            style={{ gridColumn: `1 / span ${experiences.length}` }}
          />

          {experiences.map((exp, i) => {
            const top = i % 2 === 0
            const color = palette[i % palette.length]

            return (
              <div key={exp.title} className="contents">
                {/* dot on the line */}
                <div
                  className={`row-start-2 flex justify-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{ gridColumnStart: i + 1, transitionDelay: `${i * 100}ms` }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: color }}
                  />
                </div>

                {/* content block, flipped above/below the line */}
                <div
                  className={`flex flex-col items-center px-1 text-center transition-all duration-500 ${
                    top ? 'row-start-1 self-end pb-0' : 'row-start-3 self-start pt-0'
                  } ${isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${top ? '-translate-y-2' : 'translate-y-2'}`}`}
                  style={{ gridColumnStart: i + 1, transitionDelay: `${i * 100 + 100}ms` }}
                >
                  {top ? (
                    <>
                      <p className="text-[14px] text-neutral-400 leading-snug mb-1 max-w-[7rem]">
                        {exp.description}
                      </p>
                      <span className="text-[15px] font-semibold text-neutral-200 mb-1 max-w-[7rem] leading-snug">
                        {exp.title}
                      </span>
                      <div
                  
                        style={{ background: color }}
                      >
                        <img src={exp.image} alt={exp.alt} className="w-15 h-12 object-contain" />
                      </div>
                      <span className="w-px h-2.5 bg-neutral-400/25 mb-0.5" />
                      <span
                        className="px-2 py-0.5 rounded-full text-[11px] font-bold text-white"
                        style={{ background: color }}
                      >
                        {exp.period}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className="px-2 py-0.5 rounded-full text-[11px] font-bold text-white"
                        style={{ background: color }}
                      >
                        {exp.period}
                      </span>
                      <span className="w-px h-2.5 bg-neutral-400/25 mt-0.5" />
                      <div
                       
                        style={{ background: color }}
                      >
                        <img src={exp.image} alt={exp.alt} className="w-15 h-12 object-contain" />
                      </div>
                      <span className="text-[15px] font-semibold text-neutral-200 mb-0.5 max-w-[7rem] leading-snug">
                        {exp.title}
                      </span>
                      <p className="text-[14px] text-neutral-400 leading-snug max-w-[7rem]">
                        {exp.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* swipe hint, mobile only */}
      {experiences.length > 2 && (
        <p className="sm:hidden text-center text-[10px] text-neutral-500 mt-3 animate-pulse">
          ← swipe to see more →
        </p>
      )}
    </section>
  )
}