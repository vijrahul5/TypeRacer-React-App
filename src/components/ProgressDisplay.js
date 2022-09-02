import { useEffect, useRef } from "react";

function ProgressDisplay({ text }) {
  const carAvatar = useRef(null);
  const flagAvatar = useRef(null);
  const progressDisplay = useRef(null);
  const currProgress = useRef(0);
  const progressIncrement = useRef(0);

  useEffect(() => {
    if (text && text.wordArr) {
      let progressDisplayWidth = progressDisplay.current.clientWidth;
      let flagAvatarWidth = flagAvatar.current.clientWidth;
      let carAvatarWidth = carAvatar.current.clientWidth;
      let travelSpace = progressDisplayWidth - flagAvatarWidth - carAvatarWidth;
      if (text.wordArr.length === text.currWordIndex) {
        carAvatar.current.style.transform = `translateX(${travelSpace - 3}px)`;
      } else {
        currProgress.current += progressIncrement;
        carAvatar.current.style.transform = `translateX(${Math.floor(
          (travelSpace / text.wordArr.length) * text.currWordIndex
        )}px)`;
      }
    }
  }, [text]);

  return (
    <div id="progressDisplay" ref={progressDisplay}>
      <img
        src="./assets/img/car-avatar.svg"
        alt=""
        id="carAvatar"
        ref={carAvatar}
      />
      <img
        src="./assets/img/finsih-flag-color.svg"
        alt=""
        id="flagAvatar"
        ref={flagAvatar}
      />
    </div>
  );
}

export default ProgressDisplay;
