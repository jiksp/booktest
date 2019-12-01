import React, { Component } from "react";

class Bottombtn extends Component {
  render() {
    return (
      <button
        class="login-button btn btn-primary btn-xl btn-x1-center js-scroll-trigger  font-weight-bold"
        onclick="login()"
      >
        로그인
      </button>
    );
  }
}
export default Bottombtn;
