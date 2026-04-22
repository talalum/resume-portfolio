import { resume } from "../data/resume";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const displayedTitle = useTypewriter(resume.title, 55, 800);

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="hero__particle" style={{ "--i": i }} />
        ))}
      </div>
      <div className="hero__content">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">{resume.name}</h1>
        <h2 className="hero__title">
          {displayedTitle}
          <span className="hero__cursor" aria-hidden="true">|</span>
        </h2>
        <p className="hero__location">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          {resume.location}
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Contact Me</a>
          <a href={resume.linkedin} target="_blank" rel="noreferrer" className="btn btn--outline">LinkedIn</a>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="scroll down">
        <span />
      </a>
    </section>
  );
}
