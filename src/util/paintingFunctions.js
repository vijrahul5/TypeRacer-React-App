import {
  paintSpanOne,
  paintSpanTwo,
  paintSpanThree,
  paintSpanFour,
  paintSpanFive,
  paintTextFinalWord,
} from "./paintingSpanFunctions";

export function paintText(text, textInput, currWordIndex, spanArr) {
  spanArr.forEach((ele) => {
    ele("");
  });
  const currWordStartIndex = text.wordIndexArr[currWordIndex.current];

  paintSpanOne(currWordStartIndex, text, spanArr, textInput);

  let indexForSpanThree = paintSpanTwo(
    currWordStartIndex,
    text,
    spanArr,
    textInput
  );

  paintSpanThree(
    indexForSpanThree,
    currWordStartIndex,
    text,
    spanArr,
    textInput
  );

  paintSpanFour(currWordStartIndex, text, spanArr, textInput);

  paintSpanFive(currWordStartIndex, text, spanArr, textInput);
}

export function mainPaintText(
  event,
  text,
  textInput,
  setTextInput,
  currWordIndex,
  spanArr,
  handleEndGame,
  handleWordIncrement
) {
  let textInputLength = textInput.length;
  let currWord = text.wordArr[text.currWordIndex];
  let currWordLength = currWord.length;
  let lastWordIndex = text.wordArr.length - 1;

  if (textInput === currWord && currWordIndex.current === lastWordIndex) {
    currWordIndex.current++;
    paintTextFinalWord(text, textInput, currWordIndex, spanArr);
    handleWordIncrement();
    handleEndGame();
    return;
  }

  if (textInputLength > currWordLength) {
    if (
      textInput.substring(0, textInput.length - 1) === currWord &&
      event.nativeEvent.data == " "
    ) {
      currWordIndex.current++;
      handleWordIncrement();
      setTextInput("");
      paintText(text, textInput, currWordIndex, spanArr);
    } else {
      setTextInput(textInput.substring(0, textInput.length - 1));
    }
  } else {
    paintText(text, textInput, currWordIndex, spanArr);
  }
}
