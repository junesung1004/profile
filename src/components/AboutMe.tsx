const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col  items-center w-9/12 gap-4 p-10 border m-auto shadow-xl min-w-[300px]">
      {/* about me logo */}
      <h1 className="text-2xl sm:text-6xl font-bold mb-4 sm:mb-20 hide">🔗 ABOUT ME</h1>

      {/* about introduce */}
      <div className="w-full  flex flex-wrap justify-center gap-8 sm:gap-16">
        {/* 프로필이미지 */}
        <div className="flex ">
          <img className="rounded-3xl shadow-2xl" src={process.env.PUBLIC_URL + "/images/1.jpg"} alt="이미지" width={"320px"} height={"360px"} />
        </div>

        {/* introduce */}
        <ul className="flex flex-col gap-4 p-3 cursor-default sm:p-6 sm:gap-7">
          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-xl sm:text-3xl">👨‍💻</p>
            <p className="text-base sm:text-xl">이름 : 박준성</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-xl sm:text-3xl">⭐</p>
            <p className="text-base sm:text-xl">생년월일 : 1991. 05. 04</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-xl sm:text-3xl">🏠</p>
            <p className="text-base sm:text-xl">거주지 : 인천시 부평구 갈산동</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className=" sm:text-3xl">📧</p>
            <p className="text-base sm:text-xl">이메일 : junecoding1004@gmail.com</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className=" sm:text-3xl">☎️</p>
            <p className="text-base sm:text-xl">연락처 : 010-7979-4236</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-xl sm:text-3xl">💲</p>
            <p className="text-base sm:text-xl">희망연봉 : 3600..↑</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
