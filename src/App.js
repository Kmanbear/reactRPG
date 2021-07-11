import TextStage from './components/TextStage';
import BattleStage from './components/BattleStage';
import { useState } from 'react';

function App() {
  const [gameState, setGameState] = useState(
    {
      currentStage: "battleStage"
    }
  )

  const [entities, setEntities] = useState(
    {
      player: {
      },

    }
  )

  const switchStage = (newStage) => {
    setGameState({currentStage: gameState.currentStage === "textStage" ? "battleStage" : "textStage"})
  }

  return (
    <>
    <TextStage currentStage = {gameState.currentStage} onSwitchStage={switchStage}/>
    <BattleStage currentStage = {gameState.currentStage} onSwitchStage={switchStage}/>
    </>
  );
}

export default App;