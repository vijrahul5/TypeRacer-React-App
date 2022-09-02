const API_NAME = "http://api.quotable.io/random";

export function getStartingIndexOfWords(textWordArr) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < textWordArr.length; i++) {
    arr[i] = count;
    count += textWordArr[i].length;
    if (i < textWordArr.length - 1) {
      count++;
    }
  }
  return arr;
}

export async function getNewText() {
  const fetchedData = await fetch(API_NAME);
  const data = await fetchedData.json();
  const text = data.content;
  return text;
}

export async function renderNewText(spanArr, handleUpdateText) {
  const text = await getNewText();
  spanArr[4](text);
  handleUpdateText({
    wordArr: text.split(" "),
    charArr: text.split(""),
    wordIndexArr: getStartingIndexOfWords(text.split(" ")),
    currWordIndex: 0,
  });
  return text;
}
