import React from "react"
import TextField from "@material-ui/core/TextField"

function InputId() {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="이메일 주소"
      name="email"
      helperText="이메일 주소를 입력해 주세요."
      autoComplete="email"
      autoFocus
    />
  )
}
export default InputId
