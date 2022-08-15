import Router from './Router';
// import { createGlobalStyle } from 'styled-components';
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "react-beautiful-dnd";
// import { useRecoilState } from "recoil";
import styled from "styled-components";
// import { toDoState } from './atoms';
// import Board from './components/Board';
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';

import { motion } from "framer-motion";

// const Wrapper = styled.div`
//   display: flex;
//   max-width: 680px;
//   width: 100vw;
//   margin: 0 auto;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// const Boards = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   width: 100%;
//   gap: 10px;
//   grid-template-columns: repeat(3, 1fr);
// `;

// const Form = styled.form`
//   background-color: ${(props) => props.theme.accentColor};
//   input {
//     width: 100%;
//   };
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   flex-direction: column;
//   padding: 10px;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   background-color: transparent;
//   cursor: pointer;
//   border: none;
//   font-size: 15px;
//   margin-top: 5px;
// `

// interface IForm {
//   category: string;
// }

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  // const [toDos, setToDos] = useRecoilState(toDoState);
  // const { register, setValue, handleSubmit } = useForm<IForm>();

  // const onDragEnd = (info: DropResult) => {
  //   const { destination, draggableId, source } = info;
  //   if (!destination) return;
  //   if (destination?.droppableId === source.droppableId) {
  //     // same board movement.
  //     setToDos((allBoards) => {
  //       const boardCopy = [...allBoards[source.droppableId]];
  //       const taskObj = boardCopy[source.index];
  //       boardCopy.splice(source.index, 1);
  //       boardCopy.splice(destination?.index, 0, taskObj);
  //       return {
  //         ...allBoards,
  //         [source.droppableId]: boardCopy,
  //       };
  //     });
  //   }
  //   if (destination.droppableId !== source.droppableId) {
  //     // cross board movement
  //     setToDos((allBoards) => {
  //       const sourceBoard = [...allBoards[source.droppableId]];
  //       const destinationBoard = [...allBoards[destination.droppableId]];
  //       const taskObj = sourceBoard[source.index];
  //       sourceBoard.splice(source.index, 1);
  //       destinationBoard.splice(destination?.index, 0, taskObj);
  //       return {
  //         ...allBoards,
  //         [source.droppableId]: sourceBoard,
  //         [destination.droppableId]: destinationBoard,
  //       };
  //     });
  //   }
  // }

  // const onValid = ({ category }: IForm) => {
  //   setToDos((allBoards) => {
  //     return {
  //       ...allBoards,
  //       [category]: [],
  //     };
  //   });
  //   setValue("category", "");
  // }

  // useEffect(() => {
  //   Object.keys(toDos).map((key) => {
  //     localStorage.setItem(key, JSON.stringify(toDos[key]));
  //     console.log(JSON.parse(localStorage.getItem(key) as string))
  //   })
  // }, [toDos])

  return (
  <>
    {/* <GlobalStyle/>
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
          <Form onSubmit={handleSubmit(onValid)}>
            <input
              {...register("category", { required: true })}
              type="text"
              placeholder={`Add Category`}
            />
            <Button>➕</Button>
          </Form>
        </Boards>
      </Wrapper>
    </DragDropContext> */}
    <Wrapper>
      <Box/>
      <motion.div></motion.div>
    </Wrapper>
  </>
  );
}

export default App;

