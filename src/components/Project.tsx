import { Link } from "react-router-dom";

const Project: React.FC = () => {
  return (
    <section className="flex flex-col  justify-center items-center gap-16 w-full mb-32  m-auto p-16">
      <h1 className="text-6xl font-bold mb-10 hide">⭐ Projects</h1>

      <div className="flex flex-wrap justify-center gap-10 w-9/12">
        {/* 하나의 아이템 */}
        <article className="rounded-2xl flex flex-col gap-4 min-w-[400px]  flex-1 w-full border  p-10 shadow-xl">
          <h3 className="rounded-xl font-bold bg-[rgba(249,65,72,1)] text-white px-6 py-2 w-[100px] text-center">투데잇</h3>
          <p className="text-gray-500">2024.09(5人 팀 프로젝트)</p>
          <hr className="border-t-2" />
          <h2 className="font-bold text-xl">실시간 위치 기반 맛집 추천 시스템(반응형 웹앱)</h2>
          <ul className="flex flex-col gap-3 list-disc pl-8 cursor-default">
            <li>가격대, 음식 종류, 매장 거리순으로 총 3가지의 카테고리 별로 맛집 추천</li>
            <li>
              현재 실시간 위치 기반으로 카카오지도 연동하여 <br />
              맛집 리스트 추천 후 길찾기 연동
            </li>
            <li>
              비로그인 / 로그인으로 사용할 수 있게 구현 및 <br />
              로그인 후 나만의 음식 리스트 저장(좋아하는음식 / 싫어하는 음식){" "}
            </li>
          </ul>
          <hr className="border-t-2" />
          {/* 프론트엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20">프론트엔드</h3>
            <h3 className="rounded-xl bg-orange-400  text-white px-6 py-2 text-center">Next.js, React-Hooks, Sass, context</h3>
          </div>

          {/* 백엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20">백엔드</h3>
            <h3 className="rounded-xl bg-teal-500  text-white px-6 py-2 text-center">MongoDB Atlas, next-auth, GridFS</h3>
          </div>

          {/* 인프라 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20">인프라</h3>
            <h3 className="rounded-xl bg-rose-400  text-white px-6 py-2 text-center">Netlify</h3>
          </div>

          {/* 협업 도구 툴 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20">협업도구</h3>
            <h3 className="rounded-xl bg-violet-500  text-white px-6 py-2 text-center">Git, Pigma, Notion</h3>
          </div>
          <hr className="border-t-2" />
          {/* 깃 레포지토리 */}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">Git Repository : </h3>
            <Link className="font-bold  bg-cyan-400 rounded-full  text-white px-6 py-2 text-center" to={"https://github.com/junesung1004/todayEat-TeamProject"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 배포 주소*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 배포 사이트 : </h3>
            <Link className="font-bold  bg-amber-300 rounded-full  text-white px-6 py-2 text-center" to={"https://todayeatfoods.netlify.app"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 가이드*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 가이드 : </h3>
            <Link
              className="font-bold  bg-fuchsia-600 rounded-full  text-white px-6 py-2 text-center"
              to={"https://enchanting-fifth-6b4.notion.site/10b502656bc3803eb19fd4fd31956187"}
            >
              Click ! 📖
            </Link>
          </div>
        </article>

        {/* 하나의 아이템 */}
        <article className="rounded-2xl flex flex-col gap-4 min-w-[400px]  flex-1 w-full   p-10 shadow-xl">
          <h3 className="rounded-xl font-bold bg-rose-500 text-white px-6 py-2 w-[100px] text-center">투데잇</h3>
          <p className="text-gray-500">2024.09(5人 팀 프로젝트)</p>
          <hr className="border-t-2" />
        </article>
      </div>
    </section>
  );
};

export default Project;
