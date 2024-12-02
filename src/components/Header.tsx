import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = useLocation();
  console.log("pathname : ", pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const aboutRef = useRef<HTMLDivElement>(null);
  // const skillsRef = useRef<HTMLDivElement>(null);
  // const archivingRef = useRef<HTMLDivElement>(null);
  // const projectsRef = useRef<HTMLDivElement>(null);
  // const educationRef = useRef<HTMLDivElement>(null);
  // const contactRef = useRef<HTMLDivElement>(null);

  const clickToggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const clickScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "coverletter") {
      navigate("/");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const clickChangeMoveHandler = (name: string) => {
    navigate(`/#${name}`);
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <header className="w-full fixed  z-30 bg-white h-[85px]">
      {/* header nav 부분 */}
      <div className="flex items-center justify-between md:justify-around sm:justify-between p-6 w-full">
        <h1 className="text-3xl">
          <button onClick={clickScrollToTop}>PJS's Portfolio</button>
        </h1>

        {/* desktop Menu view */}
        <nav className="hidden md:block">
          <ul className="flex gap-5 text-lg">
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#about"}>About me</a> : <button onClick={() => clickChangeMoveHandler("about")}>About me</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#skills"}>Skills</a> : <button onClick={() => clickChangeMoveHandler("skills")}>Skills</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#archiving"}>Archiving</a> : <button onClick={() => clickChangeMoveHandler("archiving")}>Archiving</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#projects"}>Projects</a> : <button onClick={() => clickChangeMoveHandler("project")}>Projects</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#education"}>Education</a> : <button onClick={() => clickChangeMoveHandler("education")}>Education</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#contact"}>Contact</a> : <button onClick={() => clickChangeMoveHandler("contact")}>Contact</button>}
            </li>
          </ul>
        </nav>

        {/* mobile menu view */}
        <div className="md:hidden cursor-pointer" onClick={clickToggleMenuHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>
      </div>
      {/* mobile menu상태이고 햄버거 모양아이콘 클릭했을때 나오는 nav태그들*/}
      {isMenuOpen && (
        <nav className="md:hidden  pr-6 pt-3  h-[320px] border shadow-lg bg-white">
          <ul className="flex flex-col gap-5 text-lg items-end ">
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#about"}>About me</a> : <button onClick={() => clickChangeMoveHandler("about")}>About me</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#skills"}>Skills</a> : <button onClick={() => clickChangeMoveHandler("skills")}>Skills</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#archiving"}>Archiving</a> : <button onClick={() => clickChangeMoveHandler("archiving")}>Archiving</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#projects"}>Projects</a> : <button onClick={() => clickChangeMoveHandler("project")}>Projects</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#education"}>Education</a> : <button onClick={() => clickChangeMoveHandler("education")}>Education</button>}
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              {pathname === "/" ? <a href={"#contact"}>Contact</a> : <button onClick={() => clickChangeMoveHandler("contact")}>Contact</button>}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
