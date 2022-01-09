import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
  };
  render() {
    // number 조회시 this.state.number 방지
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                // 콜백함수: 값 업데이트하고 난 후 실행됨
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
