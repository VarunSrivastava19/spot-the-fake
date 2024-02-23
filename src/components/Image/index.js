import { Card } from "react-bootstrap";
import { Option, Choice } from "./style";

function Image({ imgNo, type, onSelect, isSelected, props }) {
  return (
    <Option>
      <Choice>
        <Card.Img
          src={`/data/${imgNo[type]}`}
          onClick={onSelect}
          style={
            isSelected
              ? type === "fake"
                ? {
                    border: "4px solid #47FF63",
                  }
                : {
                    border: "4px solid tomato",
                  }
              : {}
          }
          width="100%"
          height="auto"
          {...props}
        />
      </Choice>
    </Option>
  );
}
export default Image;
