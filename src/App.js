import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './todo-app/components/TodoInsert';
import TodoList from './todo-app/components/TodoList';
import TodoTemplate from './todo-app/components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Do it! 타입스크립트 프로그래밍',
      checked: false,
    },
    {
      id: 2,
      text: '리액트를 다루는 기술',
      checked: true,
    },
    {
      id: 3,
      text: '자료구조 복습',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id는 ref를 사용하자
  const nextId = useRef(4);

  // todos 값이 바뀌었을 때 todo를 기존 배열에 insert한다
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 체크박스 누르면 스타일 바뀜
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
