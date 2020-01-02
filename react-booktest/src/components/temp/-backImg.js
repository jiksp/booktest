import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import img from "../img/bg-masthead.jpg"

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "flex",
    width: "100%",
    height: "100%"
  }
}))

const BackImg = () => {
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.background}></div>
    </Container>
  )
}

export default BackImg
