const CoverLetter: React.FC = () => {
  return (
    <div className="w-1/2 p-10 m-auto">
      <div className="h-40 md:30"></div>
      <article className="flex flex-col justify-center  w-full mb-56">
        <h1 className="text-3xl font-bold text-center">자기소개서</h1>
        <hr className="my-10" />
        <section className="flex flex-col gap-6  justify-center m-auto">
          <h2 className="text-xl font-bold">지원동기</h2>
          <p className="text-base leading-loose">
            저는 3D 제품 설계와 모델링에 관심이 많았고, 그 과정에서 구조적인 사고와 문제를 해결하는 방식을 배웠습니다.
            <br />
            이러한 경험이 객체지향의 특성을 가진 코딩에 흥미가 생기고 프로그래밍에 대한 관심으로 자연스럽게 이어졌습니다.
            <br /> 이후, 3개의 IT교육 과정 중 elice SW 웹개발 과정에서 프론트엔드 기반 교육을 통해 백엔드와의 연계 작업을 경험했습니다.
            <br />이 과정에서 2개의 팀 프로젝트를 진행하며 팀워크와 프로젝트 관리 능력을 쌓았고, 특히 1차 프로젝트에서는 대상을 수상한 경험이 있습니다.
            <br /> 그 후, KOSTA 교육 과정을 통해 C, C++, C# 등 C언어의 계열을 기초를 배우며 객체지향 프로그래밍에 대해 배움을 얻을 수 있었고,
            <br /> 개인 프로젝트와 팀 프로젝트를 통해 협업 능력과 문제 해결 능력을 키웠습니다. 프론트엔드 개발을 공부하면서 UX/UI의 중요성을 깊이 이해하게 되었고,
            <br /> Tailwind CSS와 Typescript 및 최신 프레임워크인 Next.js를 활용한 프로젝트에서 실전 경험을 쌓았습니다.
            <br /> 특히, 카카오 지도 API를 활용한 팀 프로젝트에서는 기획자 및 디자이너와의 협업을 통해 작성된 디자인을 실제 화면에 구현하는 기쁨을 느꼈고,
            <br /> 백엔드 개발자와 협업하여 API 명세서를 기반으로 기능을 구현하는 과정에서 정상적으로 에러 없이 동작이 되는 결과에 큰 성취감을 얻었습니다. <br />
            이러한 경험을 바탕으로, 도전적인 개발 환경과 혁신적인 프로젝트에 참여하여 더 나은 사용자 경험을 제공하는 프론트엔드 개발자로 성장하고자 합니다.
            <br /> 제 기술적 역량과 협업 능력을 바탕으로 회사와 함께 성장하는 기회를 얻고 싶습니다.
          </p>
        </section>
        <hr className="my-10" />
        <section className="flex flex-col gap-6  justify-center m-auto">
          <h2 className="text-xl font-bold">기술적 역량</h2>
          <p className="text-base leading-loose">
            <strong>HTML</strong> : 시멘틱 태그를 활용하여 코드의 구조를 명확하게 파악할 수 있도록 마크업합니다. 이를 통해 코드의 가독성을 높이고, 유지보수성을 향상시킵니다.
          </p>
          <p className="text-base leading-loose">
            <strong>CSS </strong> : 애니메이션 효과를 구현하며, 부트스트랩을 사용해 빠르게 레이아웃을 구성할 수 있습니다. 또한, 모듈 CSS, Styled-components, SCSS를 활용하여
            효율적으로 스타일을 관리하고 flex 및 media를 활용한 반응형 뷰 를 설정할 수 있으며, Tailwind CSS를 사용하여 유틸리티 기반의 빠르고 깔끔한 스타일링을 적용할 수 있습니다.
          </p>
          <p className="text-base leading-loose">
            <strong>Javascript </strong> : es6 이후 추가된 기능을 활용하여 데이터를 추출할 때 구조분해 할당하여 명확한 데이터를 추출할 수 있고 스프레드 연산자를 활용하여 배열의
            데이터를 풀어서 사용하거나 이를 활용한 새로운 배열 혹은 객체를 만들 수 있습니다.
          </p>
          <p className="text-base leading-loose">
            <strong>React </strong> : props와 useNavigate 훅을 활용하여 컴포넌트 간 데이터 전달 및 라우팅을 처리하며, useEffect 훅을 통해 컴포넌트 생명주기를 관리하고 최적화를
            진행합니다. 규모가 큰 프로젝트에서는 Redux를 활용하여 데이터를 전역으로 설정하여 주고받을 수 있습니다.
          </p>
          <p className="text-base leading-loose">
            <strong>Typescript </strong> : Interface를 설정 후 제네릭과 같이 활용하여 타입을 지정할 수 있습니다.
          </p>
          <p className="text-base leading-loose">
            <strong>Next.js </strong> : APP Router 기반 SSR과 CSR을 상황에 맞게 활용한 경험이 있습니다. 데이터가 자주 업데이트되는 페이지는 SSR을 적용하여 초기 로딩 속도를
            최적화하고 SEO를 고려한 구조를 구현하며, 실시간 데이터가 필요한 페이지는 CSR을 적용하여 효율적으로 처리했습니다. 또한, Image 컴포넌트를 사용해 이미지 최적화를 구현하여
            성능을 개선한 경험이 있습니다.
          </p>
          <p className="text-base leading-loose">
            <strong>C, C++, C# </strong> : 기초를 배우며 C계열 언어를 통해 객체지향의 의미를 배웠으며, 클래스, 포인터의 개념을 학습하였습니다.
          </p>
        </section>
        <hr className="my-10" />
        <section className="flex flex-col gap-6  justify-center m-auto">
          <h2 className="text-xl font-bold">프로젝트 경험 과 협업 경험 및 문제 해결 능력</h2>
          <p className="text-base leading-loose">
            최근 만들었던 프로젝트 중 어느정도 규모가 큰 팀 프로젝트에서는 Next.js 프레임워크와 MongoDB를 사용하여 웹 애플리케이션을 개발했습니다. 이 프로젝트에서는 기획자,
            디자이너, 백엔드 개발자와 협업을 통해 MVP(최소 기능 제품)를 정의하고, 애자일 방법론을 적용하여 개발을 진행했습니다. 이를 통해 빠른 피드백과 유연한 요구사항 반영이
            가능했으며, 매일 데일리 회의를 통해 소통을 원활하게 진행할 수 있었습니다.
          </p>
          <br />
          <ol className="cursor-default">
            <li>
              <strong>1. 기획자와의 협업</strong> <br />
              MVP 기능을 정의할 때, 저는 우선 구현 가능한 범위를 고려하여 기능 구현이 가능한지 여부를 판단했습니다. 가능하면 빠르게 구현 가능하다고 전달하고, 어려운 기능은
              우선순위를 조정하여 후순위로 미뤘습니다. 최종적으로 어떤 기능을 MVP에 포함할지에 대해서는 기획자와 상의하며 결정했습니다.
            </li>
            <br />
            <li>
              <strong>2. 디자이너와의 협업</strong> <br />
              디자이너와는 Figma와 Discord를 활용하여 디자인을 확인하고, 사용자 친화적인 인터페이스를 구현하기 위해 지속적으로 소통했습니다. 만약 디자인 구현에 어려움이 있으면,
              CSS적으로 구현이 어려울 수 있다는 점을 설명하고, 가능한 해결책을 제시하여 상호 이해를 구했습니다. 그 결과, 사용자 경험을 고려한 최적의 디자인을 구현할 수 있었습니다.
            </li>
            <br />
            <li>
              <strong>3. 백엔드 개발자와의 협업</strong> <br />
              백엔드 개발자와는 MVP 기능을 기준으로, 우선순위를 설정하고 순차적으로 기능을 구현하기로 합의했습니다. 각자 맡은 기능에 대해 명확히 인지하고 개발을 이어갔습니다.
              그러나 백엔드 개발자 두 분이 개인적인 이유로 프로젝트에서 이탈하면서, 저는 그들의 작업까지 이어 받아야 하는 상황이었습니다.
            </li>
            <br />
            <li>
              <strong>4. 문제 해결 경험</strong> <br />
              프로젝트 진행 도중 백엔드 개발자 두 분이 이탈한 후, 백엔드 기능까지 도맡아서 진행해야 했던 저는 Firebase를 사용해 풀스택 개발 경험을 되살려서 Rest full API 명세서를
              서버에서 작성하고, 프론트엔드에서 해당 API와 연결하여 테스트를 진행했습니다. 데이터베이스와의 연동도 정상적으로 작동하여 문제를 해결할 수 있었습니다.
            </li>
            <br />
          </ol>
          <p>
            또한, Kakao 지도 API를 처음 사용하면서 "Kakao is not defined" 에러에 직면했으나, 비동기 처리를 통해 문제를 해결했습니다. 이를 통해 API의 스크립트가 온로드된 후
            실행되도록 처리하여 에러를 해결하였습니다.
          </p>

          <p>
            <strong>프로젝트 배포 사이트 : </strong> <a href=" https://todayeatfoods.netlify.app"> https://todayeatfoods.netlify.app</a>
          </p>
        </section>
      </article>
    </div>
  );
};

export default CoverLetter;
