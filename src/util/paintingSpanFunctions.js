export function paintSpanOne(currWordStartIndex, text, spanArr) {
  let renderText = "";
  for (let i = 0; i < currWordStartIndex; i++) {
    renderText += text.charArr[i];
  }
  spanArr[0](renderText);
}

export function paintSpanTwo(currWordStartIndex, text, spanArr, textInput) {
  let renderText = "";
  for (let i = 0; i < textInput.length; i++) {
    if (textInput[i] === text.charArr[currWordStartIndex + i]) {
      renderText += text.charArr[currWordStartIndex + i];
    } else {
      spanArr[1](renderText);
      return i;
    }
  }
  spanArr[1](renderText);
  return textInput.length;
}

export function paintSpanThree(
  index,
  currWordStartIndex,
  text,
  spanArr,
  textInput
) {
  let renderText = "";
  for (let i = index; i < textInput.length; i++) {
    renderText += text.charArr[currWordStartIndex + i];
  }
  spanArr[2](renderText);
}

export function paintSpanFour(currWordStartIndex, text, spanArr, textInput) {
  let renderText = "";
  renderText = text.charArr[currWordStartIndex + textInput.length];
  spanArr[3](renderText);
}

export function paintSpanFive(currWordStartIndex, text, spanArr, textInput) {
  let renderText = "";
  for (
    let i = currWordStartIndex + textInput.length + 1;
    i < text.charArr.length;
    i++
  ) {
    renderText += text.charArr[i];
  }
  spanArr[4](renderText);
}

export function paintTextFinalWord(text, textInput, currWordIndex, spanArr) {
  spanArr.forEach((ele) => {
    ele("");
  });
  let renderText = "";
  for (let i = 0; i < text.charArr.length; i++) {
    renderText += text.charArr[i];
  }
  spanArr[0](renderText);
}
