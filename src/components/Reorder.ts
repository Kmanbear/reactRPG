import { DraggableLocation } from "react-beautiful-dnd";
import { EntityMap } from "./Types";

// a little function to help us with reordering the result
export const reorder = (
  list: any[],
  startIndex: number,
  endIndex: number
): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderEntities = (
  entities: EntityMap,
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const current = [...entities[source.droppableId]];
  const next = [...entities[destination.droppableId]];
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    return {
      ...entities,
      [source.droppableId]: reordered
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  return {
    ...entities,
    [source.droppableId]: current,
    [destination.droppableId]: next
  };
};