import { useEffect, useRef, useState } from "react";

const Typing: React.FC = () => {
  const firstText = "안녕하세요 :)";
  const twoText = "Frontend 개발자 박준성입니다.";

  const [firstTyping, setFirstTyping] = useState(""); // 첫 번째 텍스트 상태
  const [twoTyping, setTwoTyping] = useState(""); // 두 번째 텍스트 상태

  const firstRef = useRef(0); // 첫 번째 텍스트 인덱스 추적
  const twotRef = useRef(0); // 두 번째 텍스트 인덱스 추적

  const [isFirstTextDone, setIsFirstTextDone] = useState(false); // 첫 번째 텍스트 완료 여부
  const [isSecondTextDone, setIsSecondTextDone] = useState(false); // 두 번째 텍스트 완료 여부

  const [isResetting, setIsResetting] = useState(false); // 리셋 여부 상태 (타이핑 후 지우고 리셋 시작 시 사용)

  // 첫 번째 텍스트 타이핑
  useEffect(() => {
    if (!isResetting) {
      const typingInterval = setInterval(() => {
        setFirstTyping((prevText) => {
          let result = prevText + firstText[firstRef.current];
          firstRef.current += 1;

          if (firstRef.current >= firstText.length) {
            clearInterval(typingInterval);
            setIsFirstTextDone(true); // 첫 번째 타이핑 완료 시
          }
          return result;
        });
      }, 200);

      return () => clearInterval(typingInterval);
    }
  }, [isResetting]);

  // 두 번째 텍스트 타이핑
  useEffect(() => {
    if (isFirstTextDone && !isSecondTextDone && !isResetting) {
      const typingInterval2 = setInterval(() => {
        setTwoTyping((prevText) => {
          let result = prevText + twoText[twotRef.current];
          twotRef.current += 1;

          if (twotRef.current >= twoText.length) {
            clearInterval(typingInterval2);
            setIsSecondTextDone(true); // 두 번째 타이핑 완료 시
          }
          return result;
        });
      }, 50);

      return () => clearInterval(typingInterval2);
    }
  }, [isFirstTextDone, isSecondTextDone, isResetting]);

  // 두 번째 텍스트 지우기
  useEffect(() => {
    if (isSecondTextDone && !isResetting) {
      const eraseSecondTextInterval = setInterval(() => {
        setTwoTyping((prevText) => {
          let result = prevText.slice(0, -1); // 마지막 글자 지우기
          if (result === "") {
            clearInterval(eraseSecondTextInterval);
            setIsResetting(true); // 두 번째 텍스트 지우고 나서 리셋 시작
          }
          return result;
        });
      }, 100);

      return () => clearInterval(eraseSecondTextInterval);
    }
  }, [isSecondTextDone, isResetting]);

  // 첫 번째 텍스트 지우기
  useEffect(() => {
    if (twoTyping === "" && isResetting) {
      const eraseFirstTextInterval = setInterval(() => {
        setFirstTyping((prevText) => {
          let result = prevText.slice(0, -1); // 마지막 글자 지우기
          if (result === "") {
            clearInterval(eraseFirstTextInterval);
            // 모든 텍스트 지우고 나서 다시 처음부터 시작
            setIsFirstTextDone(false);
            setIsSecondTextDone(false);
            setIsResetting(false); // 리셋 완료, 타이핑 시작
            firstRef.current = 0; // 첫 번째 텍스트 인덱스 리셋
            twotRef.current = 0; // 두 번째 텍스트 인덱스 리셋
          }
          return result;
        });
      }, 100);

      return () => clearInterval(eraseFirstTextInterval);
    }
  }, [twoTyping, isResetting]);
  return (
    <div style={{ height: "60px" }} className="flex flex-col justify-center items-center gap-4 z-10">
      <p className="text-2xl sm:text-4xl font-dunggeunmo">{firstTyping}</p>
      <p className="text-xl sm:text-3xl font-dunggeunmo">{twoTyping}</p>
    </div>
  );
};

export default Typing;
