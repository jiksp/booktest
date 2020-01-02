import React, { Component } from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

class IdSave extends Component {
  render() {
    return (
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="아이디 저장"
      />
    )
  }
}
export default IdSave
