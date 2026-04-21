import { resume } from "../data/resume";
import { useInView } from "../hooks/useInView";

export default function Volunteers() {
  const [ref, inView] = useInView();
  return (
    <section id="volunteers" className={`section fade-up${inView ? " visible" : ""}`} ref={ref}>
      <h2 className="section__title">Volunteering</h2>
      <div className="vol__grid">
        {resume.volunteers.map((v, i) => (
          <div key={i} className="card vol__card">
            <div className="vol__icon">❤️</div>
            <div>
              <h3 className="vol__role">{v.role}</h3>
              <p className="vol__org">{v.org}</p>
              <span className="badge">{v.period}</span>
              <p className="vol__desc">{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
