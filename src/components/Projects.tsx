import { Link } from "react-router-dom";

interface ProjectsProps {
  projects: string;
  projectsRef: React.RefObject<HTMLInputElement>;
}

const Projects: React.FC<ProjectsProps> = ({ projects, projectsRef }) => {
  return (
    <section ref={projectsRef} id={projects} className="flex flex-col  justify-center items-center gap-16 w-full mb-32  m-auto p-16 scroll-mt-[85px]">
      <h1 className="text-2xl sm:text-6xl font-bold mb-0 sm:mb-20 hide w-[330px] text-center ">⭐ Projects</h1>

      <div className="flex flex-wrap justify-center gap-10 w-9/12">
        {/* 첫번째 프로젝트 */}
        <article className="rounded-2xl flex flex-col gap-4 min-w-[290px] sm:min-w-[450px]  flex-1 w-full border  p-10 shadow-xl">
          <h3 className="rounded-xl font-bold bg-[rgba(249,65,72,1)] text-white text-sm sm:text-base px-6 py-2 w-[100px] text-center">투데잇</h3>
          <p className="text-gray-500">2024.09(5人 팀 프로젝트)</p>
          <hr className="border-t-2" />
          <h2 className="font-bold text-base sm:text-xl">실시간 위치 기반 맛집 추천 시스템(반응형 웹앱)</h2>
          <ul className="flex flex-col gap-3 list-disc pl-0 sm:pl-8 cursor-default text-sm sm:text-base">
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
            <h3 className="font-bold w-20 text-sm sm:text-base">프론트엔드</h3>
            <h3 className="rounded-xl bg-orange-400  text-white text-sm sm:text-base px-6 py-2 text-center">Next.js, React-Hooks, swiper.js, Sass, context</h3>
          </div>

          {/* 백엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">백엔드</h3>
            <h3 className="rounded-xl bg-teal-500  text-white text-sm sm:text-base px-6 py-2 text-center">MongoDB Atlas, next-auth, GridFS</h3>
          </div>

          {/* 인프라 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">인프라</h3>
            <h3 className="rounded-xl bg-rose-400  text-white text-sm sm:text-base px-6 py-2 text-center">Netlify</h3>
          </div>

          {/* 협업 도구 툴 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">협업도구</h3>
            <h3 className="rounded-xl bg-violet-500  text-white text-sm sm:text-base px-6 py-2 text-center">Git, Pigma, Notion</h3>
          </div>
          <hr className="border-t-2" />
          {/* 깃 레포지토리 */}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">Git Repository : </h3>
            <Link
              className="font-bold  bg-cyan-400 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://github.com/junesung1004/todayEat-TeamProject"}
            >
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 배포 주소*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 배포 사이트 : </h3>
            <Link className="font-bold  bg-amber-300 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://todayeatfoods.netlify.app"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 가이드*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 가이드 : </h3>
            <Link
              className="font-bold  bg-fuchsia-600 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://enchanting-fifth-6b4.notion.site/10b502656bc3803eb19fd4fd31956187"}
            >
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 가이드*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">피그마 협업 가이드 : </h3>
            <Link
              className="font-bold  bg-green-500 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://www.figma.com/design/5KB1IecbjGLES56KqGmq6y/%ED%88%AC%EB%8D%B0%EC%9E%87!-%EC%98%A4%EB%8A%98-%EB%AD%90-%EB%A8%B9%EC%A7%80%3F"}
            >
              Click ! 📖
            </Link>
          </div>
        </article>

        {/* 두번째 프로젝트 */}
        <article className="rounded-2xl flex flex-col gap-4 min-w-[290px] sm:min-w-[450px]  flex-1 w-full border  p-10 shadow-xl">
          <h3 className="rounded-xl font-bold bg-[rgba(249,65,72,1)] text-white text-sm sm:text-base px-6 py-2 w-[100px] text-center">슈퍼닭</h3>
          <p className="text-gray-500">2024.05(1人 개인 프로젝트)</p>
          <hr className="border-t-2" />
          <h2 className="font-bold text-base sm:text-xl">바쁜 현대인을 위한 식단 쇼핑몰(반응형 웹앱)</h2>
          <ul className="flex flex-col gap-3 list-disc pl-0 sm:pl-8 cursor-default text-sm sm:text-base">
            <li>카테고리별로 분류하여 좋아하는 다이어트 식단을 한눈에 보기</li>
            <li>
              비 로그인 / 일반 로그인 / 소셜 로그인 / 관리자 로그인으로
              <br />
              나뉘어 보여지는 UI가 다름
            </li>
            <li>
              데이터베이스에 상품이 등록된 개수 한정에 의해 <br />
              상품을 구매할 수 있음
            </li>
            <li>
              로그인 후 상품을 장바구니에 등록할 수 있으며 장바구니 <br />
              페이지에서 상품을 구매 후 마이페이지에서 확인 가능
            </li>
          </ul>
          <hr className="border-t-2" />
          {/* 프론트엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">프론트엔드</h3>
            <h3 className="rounded-xl bg-orange-400  text-white text-sm sm:text-base px-6 py-2 text-center">React, React-Hooks, styled-component, swiper.js</h3>
          </div>

          {/* 백엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">백엔드</h3>
            <h3 className="rounded-xl bg-teal-500  text-white text-sm sm:text-base px-6 py-2 text-center">Firebase-Database, Firebase-Auth, Firebase-Storage</h3>
          </div>

          {/* 인프라 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">인프라</h3>
            <h3 className="rounded-xl bg-rose-400  text-white text-sm sm:text-base px-6 py-2 text-center">Netlify</h3>
          </div>

          {/* 협업 도구 툴 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">협업도구</h3>
            <h3 className="rounded-xl bg-violet-500  text-white text-sm sm:text-base px-6 py-2 text-center">Git</h3>
          </div>
          <hr className="border-t-2" />
          {/* 깃 레포지토리 */}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">Git Repository : </h3>
            <Link className="font-bold  bg-cyan-400 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://github.com/junesung1004/superdak"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 배포 주소*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 배포 사이트 : </h3>
            <Link className="font-bold  bg-amber-300 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://superdak.netlify.app/"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 가이드*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 가이드 : </h3>
            <Link
              className="font-bold  bg-fuchsia-600 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://enchanting-fifth-6b4.notion.site/fe9ed1bcc4a6425e9345dd87baab792b"}
            >
              Click ! 📖
            </Link>
          </div>
        </article>

        {/* 세번째 프로젝트 */}
        <article className="rounded-2xl flex flex-col gap-4 min-w-[290px] sm:min-w-[450px]  flex-1 w-full border  p-10 shadow-xl">
          <h3 className="rounded-xl font-bold bg-[rgba(249,65,72,1)] text-white text-sm sm:text-base px-6 py-2 w-[130px] text-center">미니블로그</h3>
          <p className="text-gray-500">2024.05(3人 팀 프로젝트)</p>
          <hr className="border-t-2" />
          <h2 className="font-bold text-base sm:text-xl">미니블로그(반응형 웹앱)</h2>
          <ul className="flex flex-col gap-3 list-disc pl-0 sm:pl-8 cursor-default text-sm sm:text-base">
            <li>개인이 쓴 블로그를 공유할 수 있는 사이트</li>
            <li>
              비 로그인 / 일반 로그인 / 소셜 로그인 시작할 수 있으며
              <br />
              블로그 작성 및 댓글은 로그인을 해야함
            </li>
            <li>자기가 쓴 블로그에 다른 유저가 등록한 댓글을 본인만 삭제할 수 있음</li>
          </ul>
          <hr className="border-t-2" />
          {/* 프론트엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">프론트엔드</h3>
            <h3 className="rounded-xl bg-orange-400  text-white text-sm sm:text-base px-6 py-2 text-center">React, React-Hooks, Sass</h3>
          </div>

          {/* 백엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">백엔드</h3>
            <h3 className="rounded-xl bg-teal-500  text-white text-sm sm:text-base px-6 py-2 text-center">Firebase-Database, Firebase-Auth, Firebase-Storage</h3>
          </div>

          {/* 인프라 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">인프라</h3>
            <h3 className="rounded-xl bg-rose-400  text-white text-sm sm:text-base px-6 py-2 text-center">Netlify</h3>
          </div>

          {/* 협업 도구 툴 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">협업도구</h3>
            <h3 className="rounded-xl bg-violet-500  text-white text-sm sm:text-base px-6 py-2 text-center">Git</h3>
          </div>
          <hr className="border-t-2" />
          {/* 깃 레포지토리 */}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">Git Repository : </h3>
            <Link className="font-bold  bg-cyan-400 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://github.com/miniblog-team-3/miniblog"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 배포 주소*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 배포 사이트 : </h3>
            <Link className="font-bold  bg-amber-300 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://myblogstar.netlify.app/"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 가이드*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 가이드 : </h3>
            <Link
              className="font-bold  bg-fuchsia-600 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://enchanting-fifth-6b4.notion.site/119502656bc380929efad437ce1bf9e3"}
            >
              Click ! 📖
            </Link>
          </div>
        </article>

        {/* 네번째 프로젝트 */}
        <article className="rounded-2xl flex flex-col gap-4 min-w-[290px] sm:min-w-[450px]  flex-1 w-full border  p-10 shadow-xl">
          <h3 className="rounded-xl font-bold bg-[rgba(249,65,72,1)] text-white text-sm sm:text-base px-6 py-2 w-[150px] text-center">qodespace</h3>
          <p className="text-gray-500">2024.10(1人 개인 프로젝트)</p>
          <hr className="border-t-2" />
          <h2 className="font-bold text-base sm:text-xl">질문 + 코드 + 공간 = 코드들의 질문들이 있는 공간</h2>
          <ul className="flex flex-col gap-3 list-disc pl-0 sm:pl-8 cursor-default text-sm sm:text-base">
            <li>
              비로그인 / 로그인으로 시작할 수 있음 <br />
              로그인 여부에 보여지는 UI가 다름
            </li>
            <li>로그인을 한 유저라면 누구나다 글 혹은 댓글을 작성할 수 있음</li>
          </ul>
          <hr className="border-t-2" />
          {/* 프론트엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">프론트엔드</h3>
            <h3 className="rounded-xl bg-orange-400  text-white text-sm sm:text-base px-6 py-2 text-center">next.js, typescript, tail-wind-css</h3>
          </div>

          {/* 백엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">백엔드</h3>
            <h3 className="rounded-xl bg-teal-500  text-white text-sm sm:text-base px-6 py-2 text-center">supabase-database, supabase-auth</h3>
          </div>

          {/* 인프라 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">인프라</h3>
            <h3 className="rounded-xl bg-rose-400  text-white text-sm sm:text-base px-6 py-2 text-center">Netlify</h3>
          </div>

          {/* 협업 도구 툴 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">협업도구</h3>
            <h3 className="rounded-xl bg-violet-500  text-white text-sm sm:text-base px-6 py-2 text-center">Git</h3>
          </div>
          <hr className="border-t-2" />
          {/* 깃 레포지토리 */}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">Git Repository : </h3>
            <Link className="font-bold  bg-cyan-400 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://github.com/junesung1004/studytalk"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 배포 주소*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 배포 사이트 : </h3>
            <Link className="font-bold  bg-amber-300 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://qodespace.netlify.app/"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 가이드*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 가이드 : </h3>
            <Link
              className="font-bold  bg-fuchsia-600 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://enchanting-fifth-6b4.notion.site/fe9ed1bcc4a6425e9345dd87baab792b"}
            >
              Click ! 📖
            </Link>
          </div>
        </article>

        {/* 다섯번째 프로젝트 */}
        <article className="rounded-2xl flex flex-col gap-4 min-w-[290px] sm:min-w-[450px]  flex-1 w-full border  p-10 shadow-xl">
          <h3 className="rounded-xl font-bold bg-[rgba(249,65,72,1)] text-white text-sm sm:text-base px-6 py-2 w-[150px] text-center">decoNest</h3>
          <p className="text-gray-500">2024.8(1人 개인 프로젝트)</p>
          <hr className="border-t-2" />
          <h2 className="font-bold text-base sm:text-xl">친환경 인테리어를 확인할 수 있는 사이트(반응형)</h2>
          <ul className="flex flex-col gap-3 list-disc pl-0 sm:pl-8 cursor-default text-sm sm:text-base">
            <li>친환경 내부 인테리어를 보여주는 웹사이트</li>
            <li>디바이스 종류별로 보여지는 UI 최적화(반응형)</li>
          </ul>
          <hr className="border-t-2" />
          {/* 프론트엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">프론트엔드</h3>
            <h3 className="rounded-xl bg-orange-400  text-white text-sm sm:text-base px-6 py-2 text-center">vanila javascript, IntersectionObserve를 활용한 animation</h3>
          </div>

          {/* 인프라 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">인프라</h3>
            <h3 className="rounded-xl bg-rose-400  text-white text-sm sm:text-base px-6 py-2 text-center">Netlify</h3>
          </div>

          {/* 협업 도구 툴 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">협업도구</h3>
            <h3 className="rounded-xl bg-violet-500  text-white text-sm sm:text-base px-6 py-2 text-center">Git</h3>
          </div>
          <hr className="border-t-2" />
          {/* 깃 레포지토리 */}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">Git Repository : </h3>
            <Link className="font-bold  bg-cyan-400 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://github.com/junesung1004/decoNest"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 배포 주소*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 배포 사이트 : </h3>
            <Link className="font-bold  bg-amber-300 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://deconest.netlify.app/"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 가이드*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 가이드 : </h3>
            <Link
              className="font-bold  bg-fuchsia-600 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://enchanting-fifth-6b4.notion.site/443212afa69343d2b58032468ad984b9"}
            >
              Click ! 📖
            </Link>
          </div>
        </article>

        {/* 여섯번째 프로젝트 */}
        <article className="rounded-2xl flex flex-col gap-4 min-w-[290px] sm:min-w-[450px]  flex-1 w-full border  p-10 shadow-xl">
          <h3 className="rounded-xl font-bold bg-[rgba(249,65,72,1)] text-white text-sm sm:text-base px-6 py-2 w-[200px] text-center">데이터 분석 시각화</h3>
          <p className="text-gray-500">2024.10(1人 개인 프로젝트)</p>
          <hr className="border-t-2" />
          <h2 className="font-bold text-base sm:text-xl">k-웹툰 장르별 인기도 데이터 분석 시각화</h2>
          <ul className="flex flex-col gap-3 list-disc pl-0 sm:pl-8 cursor-default text-sm sm:text-base">
            <li>캐글 데이터셋을 활용</li>
            <li>Colab기반 pandas 및 matplotlib 라이브러리를 활용한 그래프 시각화</li>
            <li>filter를 이용하여 원하는 자료만 추출하여 데이터화</li>
            <li>떠오르는 k-웹툰 관련 장르별 순위 및 장르마다 top10을 확인할 수 있는 자료</li>
          </ul>
          <hr className="border-t-2" />
          {/* 프론트엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">프론트엔드</h3>
            <h3 className="rounded-xl bg-orange-400  text-white text-sm sm:text-base px-6 py-2 text-center">Python</h3>
          </div>

          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">백엔드</h3>
            <h3 className="rounded-xl bg-teal-500  text-white text-sm sm:text-base px-6 py-2 text-center">colab, pandas, matplotlib</h3>
          </div>

          {/* 협업 도구 툴 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">협업도구</h3>
            <h3 className="rounded-xl bg-violet-500  text-white text-sm sm:text-base px-6 py-2 text-center">Git</h3>
          </div>
          <hr className="border-t-2" />

          {/* 깃 레포지토리 */}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">Git Repository : </h3>
            <Link
              className="font-bold  bg-cyan-400 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://github.com/junesung1004/Webtoon-Data-Analysis"}
            >
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 가이드*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 가이드 : </h3>
            <Link
              className="font-bold  bg-fuchsia-600 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://enchanting-fifth-6b4.notion.site/11a502656bc3800b95a4cb8eb69598af"}
            >
              Click ! 📖
            </Link>
          </div>
        </article>

        {/* 일곱번째 프로젝트 */}
        <article className="rounded-2xl flex flex-col gap-4 min-w-[290px] sm:min-w-[450px]  flex-1 w-full border  p-10 shadow-xl">
          <h3 className="rounded-xl font-bold bg-[rgba(249,65,72,1)] text-white text-sm sm:text-base px-6 py-2 w-[200px] text-center">MZ고치</h3>
          <p className="text-gray-500">2024.11(1人 개인 프로젝트)</p>
          <hr className="border-t-2" />
          <h2 className="font-bold text-base sm:text-xl">C# .NET기반 다마고치 투두리스트(MZ버전)</h2>
          <ul className="flex flex-col gap-3 list-disc pl-0 sm:pl-8 cursor-default text-sm sm:text-base">
            <li>C# .NET기반 winform으로 프로젝트 제작</li>
            <li>다마고치의 향수를 살리면서 캐릭터 상태에 따른 다양한 이벤트 발생</li>
            <li>todolist 입력할 시 특정 키워드를 입력하면 스탯 상승</li>
            <li>버튼에 따른 각기 다른 이벤트 발생</li>
            <li>기분, 건강, 배고픔 수치의 스탯이 하나라도 0이되면 게임 즉시 종료</li>
          </ul>
          <hr className="border-t-2" />
          {/* 프론트엔드 기술스택 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">프론트엔드</h3>
            <h3 className="rounded-xl bg-orange-400  text-white text-sm sm:text-base px-6 py-2 text-center">C#, .NET, WinFroms</h3>
          </div>

          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">백엔드</h3>
            <h3 className="rounded-xl bg-teal-500  text-white text-sm sm:text-base px-6 py-2 text-center">.NET, WinFroms</h3>
          </div>

          {/* 협업 도구 툴 */}
          <div className="flex flex-wrap gap-5 items-center">
            <h3 className="font-bold w-20 text-sm sm:text-base">협업도구</h3>
            <h3 className="rounded-xl bg-violet-500  text-white text-sm sm:text-base px-6 py-2 text-center">Git</h3>
          </div>
          <hr className="border-t-2" />

          {/* 깃 레포지토리 */}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">Git Repository : </h3>
            <Link className="font-bold  bg-cyan-400 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center" to={"https://github.com/junesung1004/MZgotchi"}>
              Click ! 📖
            </Link>
          </div>

          {/* 프로젝트 가이드*/}
          <div className="flex items-center gap-3">
            <h3 className="font-bold w-40">프로젝트 가이드 : </h3>
            <Link
              className="font-bold  bg-fuchsia-600 rounded-full  text-white text-sm sm:text-base px-6 py-2 text-center"
              to={"https://enchanting-fifth-6b4.notion.site/135502656bc38019944acfa2c816268c?pvs=73"}
            >
              Click ! 📖
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
