import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Military from "./components/Military";
import Volunteers from "./components/Volunteers";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Military />
        <Volunteers />
      </main>
      <Footer />
    </>
  );
}
