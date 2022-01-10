import React, { Component } from "react";

class EventPractive extends Component {
  state = {
    title: "이벤트 연습",
    message: "",
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            this.setState({
              title: this.state.message,
              message: "",
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractive;
