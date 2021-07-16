import TextStage from './components/TextStage';
import BattleStage from './components/BattleStage';
import { useState } from 'react';

function App() {
  const [gameState, setGameState] = useState(
    {
      currentStage: "battleStage"
    }
  )

  const [playerState, setPlayerState] = useState(
    {
        location: 0,
        name: ""
    }
)

  const [entities, setEntities] = useState(
    [
      {
        id: "1",
        data: {
          name: "Kyle",
          health: 100,
          damage: 10
        }
      },
      {
        id: "2",
        data: {
          name: "Dracula",
          health: 80,
          damage: 15
        }
      },
      {
        id: "3",
        data: {
          name: "Inej",
          health: 60,
          damage: 20
        },
      },
      {
        id: "4",
        data: {
          name: "Thanos",
          health: 150,
          damage: 5
        }
      },
    ]
  )

  const switchStage = (newStage) => {
    setGameState({currentStage: gameState.currentStage === "textStage" ? "battleStage" : "textStage"})
  }

const handleOption = (newLocation) => {
    setPlayerState({...playerState, location: newLocation})
}

const handleSubmit = dest => evt => {
    evt.preventDefault();
    setPlayerState({...playerState, location: dest})
}

const handleChange = (evt) => {
    setPlayerState({...playerState, name: evt.target.value})
}

  return (
    <>
    <TextStage 
    currentStage = {gameState.currentStage} 
    playerState = {playerState}
    onSwitchStage={switchStage}
    handleOption={handleOption}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    />
    <BattleStage 
    currentStage = {gameState.currentStage} 
    onSwitchStage={switchStage}
    entities={entities}
    />
    </>
  );
}

export default App;