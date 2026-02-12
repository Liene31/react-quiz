import { useState } from "react";
import { StartScreen } from "./components/StartScreen.jsx";
import { GamePlay } from "./components/GamePlay.jsx";
import { ScoreScreen } from "./components/ScoreScreen.jsx";

function App() {
  const [switchScreens, setSwitchScreens] = useState({
    startGame: true,
    gamePlay: false,
    scoreScreen: false,
  });

  function handleGameStart() {
    console.log("start game");
    setSwitchScreens((prev) => {
      return { ...prev, startGame: false, gamePlay: true };
    });
  }

  function handleScore() {
    console.log("show score");
    setSwitchScreens((prev) => {
      return { ...prev, scoreScreen: true, gamePlay: false };
    });
  }

  function handleStartScreen() {
    console.log("start screen");
  }
  return (
    <>
      {switchScreens.startGame && <StartScreen onStartGame={handleGameStart} />}
      {switchScreens.gamePlay && <GamePlay onShowScore={handleScore} />}
      {switchScreens.scoreScreen && (
        <ScoreScreen onStartScreen={handleStartScreen} />
      )}
    </>
  );
}

export default App;

// isActive
