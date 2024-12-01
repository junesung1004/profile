import { useRef } from "react";
import AboutMe from "../components/AboutMe";
import Archiving from "../components/Archiving";

import Bubbles from "../components/Bubbles";
import Contact from "../components/Contact";
import Dash from "../components/Dash";
import Education from "../components/Education";
import Introduce from "../components/Introduce";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLInputElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const archivingRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);
  const educationRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className="h-40 sm:h-80 md:90"></div>
      <Introduce />
      <AboutMe about={"about"} aboutRef={aboutRef} />
      <Dash />
      <Skills skills={"skills"} skillsRef={skillsRef} />
      {/* <Dash /> */}
      <Archiving archiving={"archiving"} />
      {/* <Dash /> */}
      <Projects projects={"projects"} />
      {/* <Dash /> */}
      <Education education={"education"} />
      {/* <Dash /> */}
      <Contact contact={"contact"} />
      <Bubbles /> {/* 배경화면 컴포넌트 */}
    </div>
  );
};

export default Home;
