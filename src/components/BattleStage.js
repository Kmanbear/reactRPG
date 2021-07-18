import { useState } from 'react';
import styled from "styled-components";
import GridLayout from 'react-grid-layout';
import GameBoardBackground from './GameBoardBackground';
import {GRID} from '../constants'

const CardDiv = styled.div`
  box-sizing: border-box;
  border: 2px solid green;
  `
const BattleStage = ({playerState, entities}) => {

  const createLayout = () => {
    let c = 0;
    const arr = [];
  
    entities.map((entity) => arr.push({
      i: entity.id,
      x: c++,
      y: 0,
      w: 1,
      h: 1,
    }))
    return arr;
  };

  const [layout, setLayout] = useState(createLayout());

  const onLayoutChange = (newLayout) => {
    if (newLayout.every((entity) => entity.y < 2)) {
      setLayout(newLayout);
    } else {
      let oldLayout = JSON.parse(JSON.stringify(layout));
      setLayout(oldLayout);
    }
  }

  const [terrain, setTerrain] = useState([
    ["dirt", "lava", "dirt", "dirt", "dirt", "lava", "dirt", "lava", "lava", "lava"],
    ["lava", "dirt", "lava", "dirt", "dirt", "dirt", "dirt", "lava", "lava", "lava"]
  ])
  
  return (
    (playerState.currentStage === "battleStage") &&
    <div>

    {/* gameboard will be made out of svgs positioned using css, each svg is picture of cell */}
    <GameBoardBackground terrain={terrain}/>
    <GridLayout 
    //position: absolute so GridLayout overlays background
    style={{position: 'absolute', top: 0, left: 0}}
    layout={layout} 
    maxRows={GRID.gridRows} cols={GRID.gridCols} 
    margin = {[GRID.marginX, GRID.marginY]}
    rowHeight={GRID.gridHeight} width={GRID.gridEntireWidth} 
    compactType={null} preventCollision={true}
    onLayoutChange={onLayoutChange}>
      {layout.map((cell) => (<CardDiv key={cell.i} >
        {JSON.stringify(entities.find((entity) => entity.id === cell.i).data, null, 2)}
      </CardDiv>))}
    </GridLayout>
    </div>
  )
}

export default BattleStage
