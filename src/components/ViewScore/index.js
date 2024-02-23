import { Container } from "react-bootstrap";
import ScoredMessages from "../../utils/scoredMessages";
import StyledButton from "../Button";
import { useState } from "react";
import SignUp from "./SignUp";
import useStorage from "../../hooks/useStorage";
import Scores from "./Scores";
function ViewScore({ score, onReset, ...props }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const scoreRange = ScoredMessages.getMessage(score);
  const [, , getData] = useStorage("data", []);
  const scores = getData();
  const sortedScores = scores && scores.sort((a, b) => b.score - a.score);
  if (sortedScores.length >= 10) {
    sortedScores.splice(10, sortedScores.length - 10);
  }
  return (
    <>
      <Container
        fluid
        style={scoreRange.styles}
        className="
        border-3 border-bottom border-dark"
      >
        <div className="pt-5 pb-5 px-4">
          <h3 className="display-3">Result</h3>
          <p className="lead">{`Score : ${score}`}</p>
          <p className="py-2 border-bottom">{`${scoreRange.message}`}</p>
          <div className="d-flex justify-content-end align-items-center">
            <StyledButton
              stylecolor={
                scoreRange.max === 3
                  ? "tomato"
                  : scoreRange.max === 6
                  ? "#ffc107"
                  : "#198754"
              }
              onClick={onReset}
            >
              <span>
                <i className="bi bi-arrow-counterclockwise"> </i>
              </span>
              Reset
            </StyledButton>
            <StyledButton stylecolor="#ceaae4" onClick={handleShow} className="ms-2">
              <span>
                <i className="bi bi-person-plus"> </i>
              </span>
              Sign Up
            </StyledButton>
          </div>
        </div>
      </Container>
      <SignUp show={show} handleClose={handleClose} score={score} />
      <Scores scores={sortedScores} />
    </>
  );
}

export default ViewScore;
