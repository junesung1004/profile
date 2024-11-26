import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickToggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full fixed  z-30 bg-white h-[85px]">
      {/* header nav 부분 */}
      <div className="flex items-center justify-between md:justify-around sm:justify-between p-6 w-full">
        <h1 className="text-3xl">PJS's Portfolio</h1>

        {/* desktop Menu view */}
        <nav className="hidden md:block">
          <ul className="flex gap-5 text-lg">
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href={"#about"}>About me</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href="#skills">Skills</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href={"#archiving"}>Archiving</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href="#projects">Project</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href="#education">Education</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href="#contact">Contact</a>
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
              <a href={"#about"}>About me</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href="#skills">Skills</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href={"#archiving"}>Archiving</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href="#projects">Project</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href="#education">Education</a>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
