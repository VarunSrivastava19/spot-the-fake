import { Button, Card, Container } from "react-bootstrap";
import ScoredMessages from "../../utils/scoredMessages";
function ViewScore({ score, onReset }) {
  const scoreRange = ScoredMessages.getMessage(score);
  return (
    <Container>
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
        <Card.Footer>
          <Button
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
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default ViewScore;
