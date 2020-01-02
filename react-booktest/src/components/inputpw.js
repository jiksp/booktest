import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"

class InputPw extends Component {
  render() {
    return (
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="비밀번호"
        type="password"
        id="password"
        helperText="2-6자리 비밀번호를 입력해 주세요."
        autoComplete="current-password"
      />
    )
  }
}
export default InputPw
