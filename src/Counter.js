import React, { useEffect, useReducer, useState } from 'react';

function reducer(state, action) {
  console.log(parseInt(action.value));
  return {
    value: state.value + parseInt(action.value),
  };
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const handleClick = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <h1>현재 카운터 값: {state.value}</h1>
      <button value={+1} onClick={handleClick}>
        +1
      </button>
      <br />
      <button value={-1} onClick={handleClick}>
        -1
      </button>
    </div>
  );
};

export default Counter;
