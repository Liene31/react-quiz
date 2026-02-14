import { useState } from "react";
import { StartScreen } from "./components/StartScreen.jsx";
import { GamePlay } from "./components/GamePlay.jsx";
import { ScoreScreen } from "./components/ScoreScreen.jsx";

function App() {
  const [switchScreens, setSwitchScreens] = useState("startPage");

  function handleScreens(navigate) {
    setSwitchScreens(navigate);
  }

  function getChosenCategory(categoryFromChild) {
    //here I can get chosen category from Child
  }

  return (
    <>
      {switchScreens === "startPage" && <StartScreen onClick={handleScreens} />}
      {switchScreens === "startGame" && <GamePlay onClick={handleScreens} />}
      {switchScreens === "showScore" && <ScoreScreen onClick={handleScreens} />}
    </>
  );
}

export default App;
