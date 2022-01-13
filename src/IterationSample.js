import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    // 새로운 항목
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onDoubleClick = (id) => {
    // 항목 더블클릭하면 항목 제거
    const nextNames = names.filter((name) => name.id !== id);
    console.log(nextNames);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onDoubleClick(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul
        style={{
          cursor: "pointer",
        }}
      >
        {nameList}
      </ul>
    </>
  );
};

export default IterationSample;
