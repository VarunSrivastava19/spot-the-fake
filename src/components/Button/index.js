import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background: white;
  border: 1px solid ${(props) => props.stylecolor || "black"};
  color: black;
  border-radius: 2.5%;
  &:hover {
    border: 2px solid black;
    background: ${(props) => props.stylecolor || "white"};
    color: white;
    filter: drop-shadow(1px 2px 6px grey);
  }
  &.btn:active {
    border: 1px solid ${(props) => props.stylecolor || "black"};
    background: ${(props) => props.stylecolor || "white"};
    color: white;
    filter: drop-shadow(1px 2px 6px green);
  }
`

export default StyledButton;