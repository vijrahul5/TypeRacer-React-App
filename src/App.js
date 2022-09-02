import { useState, useEffect, useRef } from "react";

import Timer from "./components/Timer";
import ProgressDisplay from "./components/ProgressDisplay";
import TypingArea from "./components/TypingArea";
import NextLevel from "./components/NextLevel";

function App() {
  const [state, setState] = useState(true);
  const [text, setText] = useState({});
  const [time, setTime] = useState(0);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);

  useEffect(() => {
    if (state === true) {
      setText({});
      setTime(0);
    }
  }, [state]);

  useEffect(() => {
    if (text && text.wordArr) {
      setWordsPerMinute(Math.floor(text.wordArr.length / (time / 60)));
    }
  }, [time, text]);

  function handleNextLevelClick(e) {
    setState(true);
  }

  function handleEndGame() {
    setState(false);
  }

  function handleUpdateText(textObj) {
    setText({
      ...textObj,
    });
  }

  function handleWordIncrement() {
    setText((prevText) => {
      return { ...prevText, currWordIndex: prevText.currWordIndex + 1 };
    });
  }

  return (
    <>
      <div id="mainContainer">
        <Timer setTime={setTime} state={state} />
        <ProgressDisplay text={text} />
        <TypingArea
          state={state}
          text={text}
          handleUpdateText={handleUpdateText}
          handleWordIncrement={handleWordIncrement}
          handleEndGame={handleEndGame}
        />
      </div>
      <NextLevel
        state={state}
        handleNextLevelClick={handleNextLevelClick}
        wordsPerMinute={wordsPerMinute}
      />
    </>
  );
}

export default App;
