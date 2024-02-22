import React from "react";
import { ProgressBar } from "react-bootstrap";

function Timer({ timeRemaining }) {
  let now = (timeRemaining / 15) * 100;

  return <ProgressBar animated variant="danger" now={now} label={`${now}%`} visuallyHidden />;
}

export default Timer;
