import {ReactComponent as Lava} from '../Protruding-Squares.svg';
import {ReactComponent as Dirt} from '../dirt-v2.svg';
import styled from "styled-components";
import { GRID } from '../constants';
import React from 'react';

const Board = styled.div`
  display: grid;
  width: ${props => props.gridEntireWidth.toString()+"px"};
  grid-template-columns: repeat(${props => props.gridCols}, 1fr);
  grid-template-rows: repeat(${props => props.gridRows}, 1fr);
  box-sizing: border-box;
  padding: ${props=> (props.marginY / 2).toString()+"px "+(props.marginX / 2).toString()+"px"}; //padding includes borders
`;

const GameBoardBackground = ({terrain}) => {

    const cellStrToComponentMap = {
        "dirt": <Dirt/>,
        "lava": <Lava/>
    }

    const getComponent = (str) => {
        return cellStrToComponentMap[str];
    }

    const generateBoard = (terrain) => {
        let list = [];
        for (var i = 0; i < terrain.length; i++) {
            for (var j = 0; j < terrain[i].length; j++) {
                list.push(React.cloneElement(getComponent(terrain[i][j]), { key:  j.toString() + ", " + i.toString() }))
            }
        }
        return list;
    }

    return (
        <Board gridEntireWidth={GRID.gridEntireWidth} 
        gridCols={GRID.gridCols} gridRows = {GRID.gridRows}
        marginX={GRID.marginX} marginY={GRID.marginY}>
            {generateBoard(terrain)}
        </Board>
    )
}

export default GameBoardBackground
