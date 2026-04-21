import { resume } from "../data/resume";
import { useInView } from "../hooks/useInView";

export default function Experience() {
  const [ref, inView] = useInView();
  return (
    <section id="experience" className={`section fade-up${inView ? " visible" : ""}`} ref={ref}>
      <h2 className="section__title">Experience</h2>
      <div className="timeline">
        {resume.experience.map((job, i) => (
          <div key={i} className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__card card">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <span className="timeline__company">{job.company}</span>
                </div>
                <span className="timeline__period badge">{job.period}</span>
              </div>
              <ul className="timeline__bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
