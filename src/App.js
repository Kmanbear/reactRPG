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

  return (
    <>
    <TextStage currentStage = {gameState.currentStage}/>
    <BattleStage />
    </>
  );
}

export default App;