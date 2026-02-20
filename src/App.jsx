import { useState } from "react";
import { StartScreen } from "./components/StartScreen.jsx";
import { GamePlay } from "./components/GamePlay.jsx";
import { ScoreScreen } from "./components/ScoreScreen.jsx";

function App() {
  const [switchScreens, setSwitchScreens] = useState("startPage");
  const [score, setScore] = useState(null);
  const [questionLength, setQuestionLength] = useState(null);

  function handleScreens(navigate, score, questionLength) {
    setSwitchScreens(navigate);
    setScore(score);
    setQuestionLength(questionLength);
  }

  //Gets category from StartScreen
  function getChosenCategory(category) {
    console.log(category);
  }

  return (
    <>
      {switchScreens === "startPage" && (
        <StartScreen onClick={handleScreens} category={getChosenCategory} />
      )}
      {switchScreens === "startGame" && <GamePlay onClick={handleScreens} />}
      {switchScreens === "showScore" && (
        <ScoreScreen
          onClick={handleScreens}
          score={score}
          questionLength={questionLength}
        />
      )}
    </>
  );
}

export default App;
