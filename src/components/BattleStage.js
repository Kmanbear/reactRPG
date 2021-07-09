import { useState } from 'react';
import { reorderEntities } from "./Reorder";
import { DragDropContext } from "react-beautiful-dnd";
import { AuthorList } from "./AuthorList";
import styled from "styled-components";

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(8, ${props => props.width});
  grid-template-rows: repeat(8, ${props => props.width});
  border: 4px solid black;
`;

const BattleStage = () => {
    const [boardEntities, setBoardEntities] = useState(
        [
            ["one", "two", "three"],
            ["four", "five", "six"],
            ["seven", "eight", "nine"],
        ]
    )

    return (
        <DragDropContext
        onDragEnd={({ destination, source }) => {
        // // dropped outside the list
        if (!destination) {
          return;
        }

        setBoardEntities(reorderEntities(boardEntities, source, destination));
      }}
    >
        <Board>
        {Object.entries(boardEntities).map(([k, v]) => (
          <AuthorList
            internalScroll
            key={k}
            listId={k}
            listType="CARD"
            entities={v}
          />
        ))}
        
      </Board>
        </DragDropContext>
    )
}

export default BattleStage
