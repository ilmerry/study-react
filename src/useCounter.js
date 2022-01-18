import React, { useReducer } from "react";

function reducer(state, action) {
  console.log(parseInt(action.value));
  return {
    value: state.value + parseInt(action.value),
  };
}

export default function useCounter(initValue) {
  const [state, dispatch] = useReducer(reducer, { value: initValue });
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
