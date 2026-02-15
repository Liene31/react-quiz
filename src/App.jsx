import { useState } from "react";
import { StartScreen } from "./components/StartScreen.jsx";
import { GamePlay } from "./components/GamePlay.jsx";
import { ScoreScreen } from "./components/ScoreScreen.jsx";

function App() {
  const [switchScreens, setSwitchScreens] = useState("startPage");

  function handleScreens(navigate) {
    setSwitchScreens(navigate);
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
      {switchScreens === "showScore" && <ScoreScreen onClick={handleScreens} />}
    </>
  );
}

export default App;
