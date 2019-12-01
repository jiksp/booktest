import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    return (
      <div class="form-group">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="text-white-75 form-check-label" for="exampleCheck1">
          자동로그인
        </label>
      </div>
    );
  }
}
export default Checkbox;
