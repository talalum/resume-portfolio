import { resume } from "../data/resume";
import { useInView } from "../hooks/useInView";

export default function Summary() {
  const [ref, inView] = useInView();
  return (
    <section id="about" className={`section fade-up${inView ? " visible" : ""}`} ref={ref}>
      <h2 className="section__title">About Me</h2>
      <div className="summary__card">
        <p className="summary__text">{resume.summary}</p>
      </div>
    </section>
  );
}
