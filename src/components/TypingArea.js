import { useState, useEffect, useRef } from "react";
import { renderNewText } from "../util/newTextRenderFunctions";
import {mainPaintText} from "../util/paintingFunctions";

function TypingArea({
  state,
  text,
  handleUpdateText,
  handleWordIncrement,
  handleEndGame,
}) {
  const [span1, setSpan1] = useState("");
  const [span2, setSpan2] = useState("");
  const [span3, setSpan3] = useState("");
  const [span4, setSpan4] = useState("");
  const [span5, setSpan5] = useState("");
  const [textInput, setTextInput] = useState("");
  const inputEvent = useRef(null);
  const currWordIndex = useRef(0);
  const spanArr = [setSpan1, setSpan2, setSpan3, setSpan4, setSpan5];

  useEffect(() => {
    if (state === true) {
      spanArr.forEach((ele) => {
        ele("");
      });
      renderNewText(spanArr, handleUpdateText);
      setTextInput("");
      inputEvent.current = null;
      currWordIndex.current = 0;
    } else {
      setTextInput("");
    }
  }, [state]);

  useEffect(() => {
    if (
      text &&
      text.wordArr &&
      text.wordArr.length > text.currWordIndex &&
      state === true
    ) {
      mainPaintText(
        inputEvent.current,
        text,
        textInput,
        setTextInput,
        currWordIndex,
        spanArr,
        handleEndGame,
        handleWordIncrement
      );
    }
  }, [textInput, text, state]);

  return (
    <div id="typingArea">
      <p id="typeText">
        <span className="correct">{span1}</span>
        <span className="correct">{span2}</span>
        <span className="incorrect">{span3}</span>
        <span className="underline">{span4}</span>
        <span>{span5}</span>
      </p>
      <input
        type="text"
        id="typeInput"
        placeholder="Type text here..."
        disabled={!state}
        onChange={(e) => {
          inputEvent.current = e;
          setTextInput(e.target.value);
        }}
        value={textInput}
      />
    </div>
  );
}

export default TypingArea;
