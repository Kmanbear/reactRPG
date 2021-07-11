import { useState } from 'react';
import styled from "styled-components";
import GridLayout from 'react-grid-layout';


const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(8, ${props => props.width});
  grid-template-rows: repeat(8, ${props => props.width});
  border: 4px solid black;
`;

const BattleStage = ({currentStage, onSwitchStage}) => {

  const createLayout = (rows, cols) => {
    const arr = [];
    let v = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        arr.push({
          i: `${v++}`,
          x: j,
          y: i,
          w: 1,
          h: 1,
        });
      }
    }
    return arr;
  };
  const [layout, setLayout] = useState(createLayout(2, 4));
    
    const onLayoutChange = (layout) => {
      setLayout(layout)
      console.log(layout)
    }


    return (
      (currentStage === "battleStage") &&
      <div>
      <GridLayout style={{border: '2px solid red'}} 
      layout={layout} maxRows={2} 
      className="layout" cols={12} 
      rowHeight={30} width={1200} 
      compactType={null}
      onLayoutChange={onLayoutChange}>
        {layout.map((cell) => (<div key={cell.i} style={{border: '2px solid green'}}>{cell.i}</div>))}
      </GridLayout>
      <button onClick={onSwitchStage}>Switch Stage</button>
      </div>
    )
}

export default BattleStage
