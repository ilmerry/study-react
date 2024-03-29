import {useForm} from "react-hook-form"
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DraggableCard";
import { ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

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

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
  font-size: 18px;
`

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
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
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newToDo, ...allBoards[boardId]],
      };
    });
    setValue("toDo", "");
  }
  
  return (
    <Wrapper>
    <Title>{boardId}</Title>
    <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
    </Form>
    <Droppable droppableId={boardId}>
      {(magic, info) => (
        <Area isDraggingOver={info.isDraggingOver}
        isDraggingFromThis={Boolean(info.draggingFromThisWith)}
        ref={magic.innerRef} 
        {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard
            key={toDo.id}
            index={index}
            toDoId={toDo.id}
            toDoText={toDo.text}
            />
          ))}
          {magic.placeholder}
        </Area>
      )}
    </Droppable>
    </Wrapper>
  );
}
export default Board;