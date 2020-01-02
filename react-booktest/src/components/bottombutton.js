import React from "react"
import Button from "@material-ui/core/Button"

// We can use inline-style

const BottomButton = ({ name, className }) => {
  const styles = {
    background: "linear-gradient(90deg, #EE6B4F 49.48%, #FF8D23 100%)",
    borderRadius: 25,
    border: 0,
    color: "white",
    height: 60,
    width: "300px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
  return (
    <Button className={className} style={styles}>
      {name}
    </Button>
  )
}
export default BottomButton
