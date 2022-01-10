import React, { useState } from "react";

const EventPractive = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form 복사
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    setForm({
      username: "",
      message: "",
    });
  };

  return (
    <div>
      <h1>이름: {username}</h1>
      <h1>메시지: {message}</h1>
      <input
        type="text"
        name="username"
        placeholder="이름을 입력하세요"
        value={username}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
      />
      <br />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractive;
