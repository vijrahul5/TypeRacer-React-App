import { useState, useEffect, useRef } from "react";

function startTimer(timer, timeElapsed) {
  timer.innerText = 0;
  let prevDate = new Date();
  return setInterval(function () {
    let currDate = new Date();
    timeElapsed.current = Math.floor((currDate - prevDate) / 1000);
    timer.innerText = `${Math.floor(
      Math.floor((currDate - prevDate) / 1000) / 60
    )}m ${Math.floor((currDate - prevDate) / 1000) % 60}s`;
  }, 1000);
}

function stopTimer(id) {
  clearInterval(id);
}

function Timer({ setTime, state }) {
  const timer = useRef(null);
  let timer_id = useRef(null);
  let timeElapsed = useRef(0);


  useEffect(() => {
    if (state) {
      timeElapsed.current = 0;
      timer_id.current = startTimer(timer.current, timeElapsed);
    } else {
      setTime(timeElapsed.current);
      stopTimer(timer_id.current);
    }
  }, [state]);


  return (
    <div id="timer" ref={timer}>
      0
    </div>
  );
}

export default Timer;
