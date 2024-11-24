import AboutMe from "../components/AboutMe";
import Archiving from "../components/Archiving";

import Bubbles from "../components/Bubbles";
import Contact from "../components/Contact";
import Dash from "../components/Dash";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="h-40 sm:h-80 md:90"></div>
      <Introduce />
      <AboutMe />
      <Dash />
      <Skills />
      {/* <Dash /> */}
      <Archiving />
      {/* <Dash /> */}
      <Projects />
      {/* <Dash /> */}
      <Education />
      {/* <Dash /> */}
      <Contact />
      <Footer />
      <Bubbles /> {/* 배경화면 컴포넌트 */}
    </div>
  );
};

export default Home;
