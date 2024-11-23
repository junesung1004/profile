import { Link } from "react-router-dom";

const Archiving: React.FC = () => {
  return (
    <section className="bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center w-full mb-32 p-32  m-auto">
      <h1 className="text-6xl text-white font-bold mb-20 hide">👨‍💻 Archiving</h1>

      <article className="flex flex-wrap justify-center w-2/3 gap-20">
        {/* 하나의 콘텐트 */}
        <div className="bg-white flex-1 flex flex-col shadow-xl rounded-3xl p-10 gap-3 border min-w-[360px] max-w-[550px] transform transition-all duration-300 hover:scale-105">
          <div className="m-auto flex gap-6 items-center mb-10">
            <img src={process.env.PUBLIC_URL + "/images/git.png"} alt="깃 아이콘" width={"70px"} />
            <p className="font-bold text-5xl">GitHub</p>
          </div>

          <Link to={"https://github.com/junesung1004"} className="font-bold  m-auto">
            <p className="text-xl">Git site Click ME ! 👀 👀</p>
          </Link>
        </div>

        {/* 하나의 콘텐트 */}
        <div className="bg-white flex-1 flex flex-col shadow-xl rounded-3xl p-10 gap-3 border min-w-[360px] max-w-[550px] transform transition-all duration-300 hover:scale-105">
          <div className="m-auto flex gap-6 items-center mb-10">
            <img src={process.env.PUBLIC_URL + "/images/notion.jpg"} alt="깃 아이콘" width={"70px"} />
            <p className="font-bold text-5xl">Notion</p>
          </div>

          <Link to={"https://enchanting-fifth-6b4.notion.site/3b23288e419a430993d5e45b8f2f5e1d"} className="font-bold  m-auto">
            <p className="text-xl">Notion site Click ME ! 📖 ✏️</p>
          </Link>
        </div>
      </article>

      {/*  */}
    </section>
  );
};

export default Archiving;
