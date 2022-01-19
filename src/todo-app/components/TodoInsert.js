import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // useCallback은 성능을 아껴준다!
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // 왜 onInsert를 여기서 선언하지 않고, App.js에서 선언했는가?
  // onInsert에서 App.js의 state를 이용하려고!
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      // 새로고침 방지(온클릭이면 안써줘도 됨)
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
