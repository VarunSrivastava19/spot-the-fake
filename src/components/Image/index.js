import { Card, Col } from "react-bootstrap";
import Choice from "./style";

function Image({ imgNo, type, onSelect, isSelected }) {
  return (
    <Col>
      <Choice>
        <Card.Img
          src={`/data/${imgNo[type]}`}
          onClick={onSelect}
          style={
            isSelected
              ? type === "fake"
                ? {
                    border: "4px solid #1aec5d",
                  }
                : {
                    border: "4px solid tomato",
                  }
              : {}
          }
        />
      </Choice>
    </Col>
  );
}
/**
 * style={
 * isSelected
 * ? {
 * type === "fake"
 * ? {
 * border: "4px solid #1aec5d",
 * }
 * : {
 * border: "4px solid tomato",
 * }
 * }
 * : {}
 * }
 *
 */
export default Image;
