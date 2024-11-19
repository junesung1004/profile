import React from "react";
import "./Bubbles.css";

const Bubbles: React.FC = () => {
  // 버블들을 랜덤 위치에서 생성하도록 만들기
  const generateBubbles = () => {
    const bubbles = [];
    const numberOfBubbles = 13; // 생성할 버블 개수 (필요에 맞게 조정)

    for (let i = 0; i < numberOfBubbles; i++) {
      const randomDelay = Math.random() * 5; // 랜덤 애니메이션 시작 딜레이
      const randomSize = Math.random() * (12 - 5) + 5; // 랜덤 크기 (5vw ~ 12vw)
      const randomLeft = Math.random() * 100; // 랜덤 X 좌표 (0~100)
      const randomDuration = Math.random() * (20 - 10) + 10; // 랜덤 애니메이션 속도 (10초 ~ 20초)

      // 랜덤 스타일을 포함한 span 태그 생성
      bubbles.push(
        <span
          key={i}
          style={{
            left: `${randomLeft}vw`,
            width: `${randomSize}vw`,
            height: `${randomSize}vw`,
            animationDuration: `${randomDuration}s`,
            animationDelay: `${randomDelay}s`,
          }}
          className={["purple", "yellow", "green", "pink", "blue"][Math.floor(Math.random() * 5)]}
        ></span>
      );
    }

    return bubbles;
  };

  return <div className="bubbles">{generateBubbles()}</div>;
};

export default Bubbles;
