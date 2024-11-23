import { useEffect } from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const elements = document.querySelectorAll(".hide");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-7/12 mb-32 p-30 m-auto ">
      <h1 className="text-6xl font-bold mb-20 hide">⚡ Skills</h1>
      <article className="flex flex-col w-full gap-6 mb-20">
        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide ">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">HTML</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-10/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                80%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">CSS</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-10/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                80%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">JavaScript</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-8/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                60%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">jQuery</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-4/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                30%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">React</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-8/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                60%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">TypeScript</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-4/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                30%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">Next.js</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-4/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                30%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">Styled-Component</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-9/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                70%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">SCSS</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-10/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                80%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">Tailwind</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-5/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                40%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">Bootstrap</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-6/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                50%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">C</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-4/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                30%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">C++</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-4/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                30%
              </div>
            </div>
          </div>
        </div>

        {/* 하나의 아이템 */}
        <div className="flex flex-wrap items-center hide">
          <p className="text-xl font-bold text-center min-w-[240px] w-52 mb-2">C#</p>
          <div className="flex flex-1 border shadow-xl w-full h-10 rounded-lg">
            <div className="flex items-center w-4/12 h-full  rounded-r-full">
              <div className="text-white font-bold pr-8 flex items-center justify-end h-full bg-gradient-to-r from-[#FEE9B2] to-[#FEC898] animate-fillWidth rounded-r-full">
                30%
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </article>

      {/*  */}
      <article className="flex flex-col w-full min-w-[360px] border shadow-md p-6 rounded-lg gap-7">
        {/* 아이템 */}
        <div className="flex flex-wrap items-center hide gap-7">
          <div className="flex items-center gap-3 w-40">
            <img src={process.env.PUBLIC_URL + "images/language.svg"} alt="언어로고" width={"40px"} height={"40px"} />
            <p className="font-bold text-lg  ">Language</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="bg-gray-600 text-white">Typescript</span>
            <span className="bg-neutral-500 text-white">Javascript</span>
            <span className="bg-indigo-300 text-white">Python</span>
            <span className="bg-rose-500 text-white">C</span>
            <span className="bg-green-300 text-white">C++</span>
            <span className="bg-blue-600 text-white">C#</span>
          </div>
        </div>

        {/* 아이템  */}
        <div className="flex flex-wrap items-center hide gap-7">
          <div className="flex items-center gap-3 w-40">
            <img src={process.env.PUBLIC_URL + "images/frontend.svg"} alt="언어로고" width={"40px"} height={"40px"} />
            <p className="font-bold text-lg  ">Frontend</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="bg-red-400 text-white">Next.js(React)</span>
            <span className="bg-green-500 text-white">React-hooks</span>
            <span className="bg-cyan-400 text-white">Sass</span>
            <span className="bg-rose-500 text-white">Styled-component</span>
            <span className="bg-green-300 text-white">Tailwind CSS</span>
            <span className="bg-blue-600 text-white">Winform</span>
          </div>
        </div>

        {/* 아이템  */}
        <div className="flex flex-wrap items-center hide gap-7">
          <div className="flex items-center gap-3 w-40">
            <img src={process.env.PUBLIC_URL + "images/backend.svg"} alt="언어로고" width={"40px"} height={"40px"} />
            <p className="font-bold text-lg  ">Backend</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="bg-emerald-950 text-white">Node.js</span>
            <span className="bg-orange-400 text-white">Firebase</span>
            <span className="bg-purple-500 text-white">Supabase</span>
            <span className="bg-teal-400 text-white">MongoDB</span>
          </div>
        </div>

        {/* 아이템  */}
        <div className="flex flex-wrap items-center hide gap-7">
          <div className="flex items-center gap-3 w-40">
            <img src={process.env.PUBLIC_URL + "images/infra.svg"} alt="언어로고" width={"40px"} height={"40px"} />
            <p className="font-bold text-lg  ">Infra</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="bg-teal-300 text-white">Netlify</span>
          </div>
        </div>

        {/*  */}
      </article>
    </section>
  );
};

export default Skills;
