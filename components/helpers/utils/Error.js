import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const Error = ({ error, resetError, openError }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  console.log("error", error);

  return (
    <Snackbar
      open={openError}
      className={classes.snackbar}
      message={error}
      //   anchorOrigin={{ vertical: "top", horizontal: "center" }}
      //   key={`top,center`}
      TransitionComponent={TransitionDown}
      action={
        <Button
          onClick={(() => setOpen(false), resetError())}
          color="secondary"
          size="small"
        >
          Close
        </Button>
      }
    />
  );
};

const useStyles = makeStyles({
  snackbar: {
    color: "red",
    background: "red",
  },
});

export default Error;
