import Typography from "@material-ui/core/Typography"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    color: "white"
  }
}))

export default function MyTypography(message) {
  const classes = useStyles()
  return <Typography className={classes.root}>{message}</Typography>
}
