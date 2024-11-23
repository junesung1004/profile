const Header: React.FC = () => {
  return (
    <header className="w-full fixed p-6 z-30 bg-white">
      {/* header nav 부분 */}
      <div className="flex items-center justify-around ">
        <h1 className="text-3xl">PJS's Portfolio</h1>
        <nav>
          <ul className="flex gap-5 text-lg">
            <li>About me</li>
            <li className="relative">Skills</li>
            <li className="relative">Archiving</li>
            <li className="relative">Project</li>
            <li className="relative">Education</li>
            <li className="relative">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
