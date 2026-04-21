import { resume } from "../data/resume";
import { useInView } from "../hooks/useInView";

export default function Education() {
  const [ref, inView] = useInView();
  return (
    <section id="education" className={`section fade-up${inView ? " visible" : ""}`} ref={ref}>
      <h2 className="section__title">Education</h2>
      <div className="edu__grid">
        {resume.education.map((ed, i) => (
          <div key={i} className="card edu__card">
            <div className="edu__icon">🎓</div>
            <div>
              <h3 className="edu__degree">{ed.degree}</h3>
              <p className="edu__institution">{ed.institution}</p>
              <span className="badge">{ed.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
