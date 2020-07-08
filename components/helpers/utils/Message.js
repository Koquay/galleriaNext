import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const Message = ({ message, resetMessage, openMessage }) => {
  const classes = useStyles();

  console.log("message", message);

  return (
    <Snackbar
      open={openMessage}
      className={classes.snackbar}
      message={message}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      // key={`top,center`}
      TransitionComponent={TransitionDown}
      autoHideDuration={6000}
      transitionDuration={2000}
      action={
        <Button onClick={() => resetMessage()} color="secondary" size="small">
          OK
        </Button>
      }
    />
  );
};

const useStyles = makeStyles({
  snackbar: {
    color: "red",
    // background: "red",
    // fontSize: "1.2rem",
  },
});

export default Message;
