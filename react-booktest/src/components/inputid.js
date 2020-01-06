import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"

function InputId(onClickEvent, onChangeText, error, maxLength, multiline) {
  const [isText, setIsText] = useState("")
  const isClicked = () => {
    onClickEvent()
  }
  const onChange = text => {
    setIsText(text)
    onChangeText(text)
  }

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
      maxLength={maxLength ? maxLength : 200}
      multiline={!!multiline}
      onChangeText={text => onChange(text)}
    />
  )
}
export default InputId
