interface EducationProps {
  education : string
}


const Education: React.FC<EducationProps> = ({education}) => {
  return (
    <section id={education} className="flex flex-col  justify-center items-center gap-16 w-full mb-32  m-auto p-32 bg-[rgba(0,0,0,0.5)] scroll-mt-[85px]">
      <h1 className="text-2xl sm:text-6xl font-bold mb-10 sm:mb-20 hide w-[330px] text-center ">🔥 Education</h1>

      {/* 하나의 폼 */}
      <article className="flex flex-wrap min-w-[290px] sm:min-w-[460px] bg-white w-8/12 items-center  border shadow-xl sm:p-20 p-6 rounded-3xl">
        <div className="flex-2 mr-20">
          <h2 className="font-bold text-2xl mb-3">엘리스 SW5기 부트캠프</h2>
          <p className="text-gray-500">2023.08 - 2023-11</p>
        </div>
        <ul className="  flex-1 list-disc p-6 flex flex-col gap-4 text-sm sm:text-lg cursor-default ">
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">HTML, CSS, JavaScript</span> 과목을 학습 후<br />
            1차 프로젝트때 배운 내용을 활용하여 팀 프로젝트<span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">대상</span>
            을 수여함.
          </li>
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              TypeScript, Node.js, express, MongoDB, mongoose, React
            </span>
            <br />
            과목을 학습 후 2차 팀 프로젝트를 진행함
          </li>

          <img src={process.env.PUBLIC_URL + "/images/awards.webp"} alt="팀프로젝트 대상 이미지" width={350} height={300} />
        </ul>
      </article>

      {/* 하나의 폼 */}
      <article className="flex flex-wrap min-w-[290px] sm:min-w-[460px] bg-white w-8/12 items-center  border shadow-xl sm:p-20 p-6 rounded-3xl">
        <div className="flex-2 mr-20">
          <h2 className="font-bold text-2xl mb-3">메가스터디it아카데미</h2>
          <p className="text-gray-500">2024.04 - 2024.05</p>
        </div>
        <ul className=" flex-1 list-disc p-6 flex flex-col gap-4 text-sm sm:text-lg cursor-default ">
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">반응형 뷰 조정 및 Sass</span> 기법을 학습 후 TypeScript
            과목을 활용하여
            <br /> Next.js 미니 프로젝트를 진행
          </li>
        </ul>
      </article>

      {/* 하나의 폼 */}
      <article className="flex flex-wrap min-w-[290px] sm:min-w-[460px] bg-white w-8/12 items-center  border shadow-xl sm:p-20 p-6 rounded-3xl">
        <div className="flex-2 mr-14">
          <h2 className="font-bold text-2xl mb-3">코스타(한국소프트웨어기술진흥협회)</h2>
          <p className="text-gray-500">2024.07 - 2024.12</p>
        </div>
        <ul className=" flex-1 list-disc p-6 flex flex-col gap-4 text-sm sm:text-lg cursor-default ">
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              C, C++, C#, Python, HTML5, JavaScript(es6), <br />
              Typescript, React, Node.js, express, <br />
              MongoDB, Python
            </span>
            과목을 학습함
          </li>
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">C++</span>
            과목을 통해서 객체지향에 대해 학습함
          </li>
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">vanila javascript</span>를 활용하여 반응형 웹사이트를 제작
          </li>
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">C# → .net → winform</span>기반 다마고치 투두리스트
            <br />
            프로젝트 제작
          </li>
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Next.js</span>를 활용한 실시간 위치 지도 기반
            <br />
            맛집 추천 프로젝트(반응형) 제작
          </li>
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Next.js + Typescript + Supabase</span>로
            <br />
            IT 질문을 공유할 수 있는 웹사이트 제작
          </li>
          <li>
            <span className="p-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">pandas를 활용한 데이터분석</span>프로젝트를 제작
            <br />
            (캐글 데이터셋 + matplotlib 그래프 기반)
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Education;
