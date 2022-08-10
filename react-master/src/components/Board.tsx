import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DraggableCard";

const Wrapper = styled.div`
    width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: #E4E9BE;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
  font-size: 18px;
`

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
  }
  
  const Area = styled.div<IAreaProps>`
    background-color: ${(props) =>
        props.isDraggingOver
        ? "transparent"
        : props.isDraggingFromThis
        ? "transparent"
        : "transparent"
    };
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
  `;

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
    <Title>{boardId}</Title>
    <Droppable droppableId={boardId}>
      {(magic, info) => (
        <Area isDraggingOver={info.isDraggingOver}
        isDraggingFromThis={Boolean(info.draggingFromThisWith)}
        ref={magic.innerRef} 
        {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard key={toDo} index={index} toDo={toDo} />
          ))}
          {magic.placeholder}
        </Area>
      )}
    </Droppable>
    </Wrapper>
  );
}
export default Board;