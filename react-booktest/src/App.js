import React from "react"
import Signin from "./components/signIn/signIn"
import Main from "./components/main/main"
import img from "./img/bg-masthead.jpg"
import { makeStyles } from "@material-ui/core/styles"
import BackLayer from "./components/temp/-backLayer"
import { CssBaseline } from "@material-ui/core"
import { ApolloProvider } from "react-apollo"
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks"
import client from "./apollo/apolloClient"
import { HashRouter as Router, Route } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  // bg: {
  //   // display: "none",
  //   // backgroundColor: "rgba(0, 0, 0, .8)",
  //   // backgroundRepeat: "no-repeat",
  //   // backgroundSize: "cover",
  //   // backgroundPosition: "top",
  //   // float: "left",
  //   // position: "absolute",
  //   // width: "100%",
  //   // height: "100%",
  //   // display: "flex",
  //   // flexDirection: "column",
  //   // alignItems: "center"
  // },
  // container: {
  //   backgroundImage: `url(${img})`,
  //   position: "relative",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "repeat"
  // },
  // background: {
  //   backgroundImage: `url(${img})`,
  //   position: "relative",
  //   backgroundRepeat: "repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   // position: "absolute",
  //   width: "100%",
  //   height: "100%"
  //   // backgroundImage: `url(${img})`,
  //   // position: "absolute",
  //   // backgroundRepeat: "repeat",
  //   // backgroundSize: "cover",
  //   // backgroundPosition: "center",
  //   // // position: "absolute",
  //   // width: "100%",
  //   // height: "100%"
  //   // // display: "flex",
  //   // // flexDirection: "column",
  //   // // alignItems: "center"
  // }
}))

const App = () => {
  const classes = useStyles()
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        {/* <div className={classes.background}>
        <div className={classes.bg}></div>
      </div> */}
        <Router>
          <main>
            <Route exact={true} path={"/"} component={Signin} />
            <Route path={"/main"} component={Main} />
          </main>
        </Router>

        {/* <div className={classes.bg}> </div> */}
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App
