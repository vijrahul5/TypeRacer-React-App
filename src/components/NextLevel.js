
function NextLevel({ state, wordsPerMinute, handleNextLevelClick }) {
  return (
    <div id="nextLevelContainer" className={state ? "hide" : null}>
      <p id="wordsPerMinute">Typing Speed: {wordsPerMinute} wpm</p>
      <button id="nextLevel" onClick={handleNextLevelClick}>
        Next Level
      </button>
    </div>
  );
}

export default NextLevel;
