import { resume } from "../data/resume";
import { useInView } from "../hooks/useInView";

export default function Skills() {
  const [ref, inView] = useInView();
  let globalIndex = 0;

  return (
    <section id="skills" className={`section fade-up${inView ? " visible" : ""}`} ref={ref}>
      <h2 className="section__title">Skills</h2>
      <div className="skills__grid">
        {Object.entries(resume.skills).map(([category, items]) => (
          <div key={category} className="card skills__category">
            <h3 className="skills__cat-title">{category}</h3>
            <div className="skills__tags">
              {items.map((skill) => {
                const i = globalIndex++;
                return (
                  <span
                    key={skill}
                    className={`skill-tag${inView ? " skill-tag--visible" : ""}`}
                    style={{ "--tag-delay": `${i * 60}ms` }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
