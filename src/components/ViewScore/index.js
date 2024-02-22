import { Container } from "react-bootstrap";
import ScoredMessages from "../../utils/scoredMessages";
import StyledButton from "../Button";
function Jumbo({ score, onReset, ...props }) {
  const scoreRange = ScoredMessages.getMessage(score);
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
        </div>
      </Container>
    </>
  );
}

export default Jumbo;
