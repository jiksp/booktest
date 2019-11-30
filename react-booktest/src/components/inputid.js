import React, { Component } from "react";

class Inputid extends Component {
  render() {
    return (
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="user_email"
          aria-describedby="emailHelp"
          placeholder="E-mail"
        />
      </div>
    );
  }
}
export default Inputid;
