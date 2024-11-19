import AboutMe from "../components/AboutMe";
import Archiving from "../components/Archiving";
import Bubbles from "../components/Bubbles";
import Dash from "../components/Dash";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Skills from "../components/Skills";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="h-80"></div>
      <Introduce />
      <AboutMe />
      <Dash />
      <Skills />
      <Dash />
      <Archiving />
      <Footer />
      <Bubbles /> {/* 배경화면 컴포넌트 */}
    </div>
  );
};

export default Home;
