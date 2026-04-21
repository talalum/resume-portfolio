import { resume } from "../data/resume";
import { useInView } from "../hooks/useInView";

export default function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" className={`section fade-up${inView ? " visible" : ""}`} ref={ref}>
      <h2 className="section__title">Skills</h2>
      <div className="skills__grid">
        {Object.entries(resume.skills).map(([category, items]) => (
          <div key={category} className="card skills__category">
            <h3 className="skills__cat-title">{category}</h3>
            <div className="skills__tags">
              {items.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
