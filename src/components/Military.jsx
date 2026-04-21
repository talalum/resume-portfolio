import { resume } from "../data/resume";
import { useInView } from "../hooks/useInView";

export default function Military() {
  const { military } = resume;
  const [ref, inView] = useInView();
  return (
    <section id="military" className={`section fade-up${inView ? " visible" : ""}`} ref={ref}>
      <h2 className="section__title">Military Service</h2>
      <div className="card military__card">
        <div className="military__header">
          <div className="military__icon">🪖</div>
          <div>
            <h3 className="military__role">{military.role}</h3>
            <p className="military__unit">{military.unit}</p>
            <span className="badge">{military.period}</span>
          </div>
        </div>
        <ul className="timeline__bullets">
          {military.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
