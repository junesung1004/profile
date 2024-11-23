const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col  items-center w-9/12 gap-6 p-10 border m-auto shadow-xl min-w-[360px]">
      {/* about me logo */}
      <div className="flex items-center gap-3 mb-10">
        <p className="text-6xl hide">🔗</p>
        <p className="text-6xl font-bold hide">ABOUT ME</p>
      </div>

      {/* about introduce */}
      <div className="w-full  flex flex-wrap justify-center gap-16">
        {/* 프로필이미지 */}
        <div className="flex ">
          <img className="rounded-3xl shadow-2xl" src={process.env.PUBLIC_URL + "/images/1.jpg"} alt="이미지" width={"340px"} height={"360px"} />
        </div>

        {/* introduce */}
        <ul className="flex flex-col gap-7 p-6 cursor-default">
          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-3xl">👨‍💻</p>
            <p className="text-xl">이름 : 박준성</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-3xl">⭐</p>
            <p className="text-xl">생년월일 : 1991. 05. 04</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-3xl">🏠</p>
            <p className="text-xl">거주지 : 인천시 부평구 갈산동</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-3xl">📧</p>
            <p className="text-xl">이메일 : junecoding1004@gmail.com</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-3xl">☎️</p>
            <p className="text-xl">연락처 : 010-7979-4236</p>
          </li>

          {/* 하나의 아이템 */}
          <li className="flex items-center gap-6">
            <p className="text-3xl">💲</p>
            <p className="text-xl">희망연봉 : 3600..↑</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
