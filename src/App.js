import TextStage from './components/TextStage';
import BattleStage from './components/BattleStage';
import { useState } from 'react';

function App() {

  const [playerState, setPlayerState] = useState(
    {
        currentStage: "textStage",
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

const movePlayerToNewLocation = (newStage, newLocation) => {
  setPlayerState({...playerState, currentStage: newStage, location: newLocation})
}

const handleOption = (newStage, newLocation) => {
  movePlayerToNewLocation(newStage, newLocation);
}

const handleSubmit = (newStage, newLocation) => evt => {
    evt.preventDefault();
    movePlayerToNewLocation(newStage, newLocation);
}

const handleChange = (evt) => {
    setPlayerState({...playerState, name: evt.target.value})
}

  return (
    <>
    <TextStage 
    playerState = {playerState}
    handleOption={handleOption}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    />
    <BattleStage 
      playerState={playerState}
      entities={entities}
    />
    </>
  );
}

export default App;