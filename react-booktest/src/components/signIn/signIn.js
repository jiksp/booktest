import React, { useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import BottomButton from "../bottombutton"
import { useTheme, createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import img from "../img/bg-masthead.jpg"
import InputId from "../inputid"
import InputPw from "../inputpw"
import IdSave from "../idsave"

const theme = createMuiTheme({
  palette: {
    type: "dark" // Switching the dark mode on is a single property value change.
  }
})

const styles = {
  container: {
    backgroundColor: "rgba(1, 1, 1, .8)",
    position: "relative",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    margin: "0",
    padding: "0",
    overflow: "hidden"
  }
}

const useStyles = makeStyles(theme => ({
  container: {
    backgroundImage: `url(${img})`,
    position: "absolute",
    backgroundSize: "auto",
    backgroundRepeat: "repeat",

    height: "100%",
    margin: "0",
    padding: "0"
  },
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  bar: {
    width: "45%",
    height: "5px",
    background: "linear-gradient(90deg, #EE6B4F 49.48%, #FF8D23 100%)"
  },
  header: {
    marginTop: theme.spacing(12)
  },
  bodyTitle: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "60%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  button: {
    // Fix IE 11 issue.
    width: "300px",
    margin: theme.spacing(3, 30, 2)
  }
}))

const Signin = () => {
  const classes = useStyles()
  const [useremail, setUseremail] = useState("")
  const [password, setPassword] = useState("")
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [helperText, setHelperText] = useState("")
  const [error, setError] = useState(false)
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const updateContextState = () => {
    const { email, password } = user

    updateState({
      ...registerData,
      email,
      password,
      point: 0
    })
  }
  const registerCheck = () => {
    if (user.email !== "" && user.password !== "") {
      updateContextState()
      NavigationService.navigate("RegisterProfile", {
        screen: "RegisterProfile"
      })
    }
  }

  return (
    <Container className={classes.container} maxWidth="false">
      <Container style={styles.container} maxWidth="false">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography className={classes.header} variant="h2" gutterBottom>
              당신의 서재
            </Typography>
            <div className={classes.bar}></div>
            <div className={classes.bodyTitle}>
              <Typography fontColor="white" variant="h6" align="center" gutterBottom>
                감명깊게 읽은 책의 구절을 저장하고, 자신만의 서재를 만들어 가세요!<br></br>자신의
                취향과 비슷한 다른 사람의 서재를 구경하고 자신에게 맞는 책을 추천 받을 수 있습니다
                :)
              </Typography>
            </div>
            <form
              className={classes.form}
              onSubmit={e => {
                e.preventDefault()
                // Auth handler
              }}
            >
              <InputId nChangeText={nickname => setUser({ ...user, nickname })} />
              <InputPw />
              <IdSave />
            </form>
            <BottomButton
              className={classes.button}
              name={"로그인"}
              transparent
              onPress={() => registerCheck()}
            ></BottomButton>
          </div>
        </ThemeProvider>
      </Container>
    </Container>
  )
}
export default Signin
