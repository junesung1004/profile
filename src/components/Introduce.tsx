import { Link } from "react-router-dom";
import Typing from "./Typing";

const Introduce: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-6 mb-32">
      <Typing />
      <article className="text-center mt-16 text-base sm:text-lg">
        <p className="p-14">
          저는 3d 제품 설계에서 모델링하는 것을 <br />
          좋아하던 도중 객체지향의 특성을 가진 코딩에 흥미가 생겼고, <br />
          마크업 언어에 대한 호기심에 혼자서 관련 영상과 서적을 찾아 이것저것 시도해보면서 <br />
          자연스럽게 개발자로서의 꿈을 키워왔습니다.. 수많은 도전과 경험을 통해
          <br />
          다양한 기술 스택을 쌓아 사용자가
          <br />
          불편함을 겪지 않도록 효율적이고 직관적인 시스템을 제공할 수 있는 <br />
          개발자가 되고자 합니다.
        </p>
      </article>
      <button className="w-40 h-16 rounded-full bg-teal-200 transition duration-500 hover:bg-teal-400 text-white">
        <Link to={"/coverletter"}>자소서 click me!</Link>
      </button>
    </section>
  );
};

export default Introduce;
