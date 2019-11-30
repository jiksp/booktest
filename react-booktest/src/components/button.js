import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div class="login-check-button-combo">
        <button type="button" class="btn btn-outline-light login-check-button">
          <a href="/register">{this.state.TTutton.btntxt}></a>
        </button>
      </div>
    );
  }
}
export default Button;
