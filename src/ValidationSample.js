import React, { Component } from "react";
import "./ValidationSample.css";

// 비밀번호가 맞았으면 초록색, 틀렸으면 빨간색으로 input 색상을 바꾸는 컴포넌트
class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  //handleFocus = () => {};

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000", // boolean
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="password"
          value={this.state.password}
          //onFocus={this.handleFocus}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
