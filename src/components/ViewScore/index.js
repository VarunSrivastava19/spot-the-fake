import { Row, Col, Card } from "react-bootstrap";
import ScoredMessages from "../../utils/scoredMessages";
import { CardButton, CardFooter } from "./style";
function ViewScore({ score, onReset, ...props }) {
  const scoreRange = ScoredMessages.getMessage(score);
  return (
    <Row {...props}>
      <Col>
        <Card
          border={
            scoreRange.max === 3
              ? "danger"
              : scoreRange.max === 6
              ? "warning"
              : "success"
          }
        >
          <Card.Header style={scoreRange.styles}>
            <Card.Title>
              <h3>Score</h3>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle>
              <span className="lead">{`Score : ${score}`}</span>
            </Card.Subtitle>
            <p>{`${scoreRange.message}`}</p>
          </Card.Body>
          <CardFooter>
            <CardButton
              variant={`outline-${
                scoreRange.max === 3
                  ? "danger"
                  : scoreRange.max === 6
                  ? "warning"
                  : "success"
              }`}
              onClick={onReset}
            >
              Reset
            </CardButton>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}

export default ViewScore;
