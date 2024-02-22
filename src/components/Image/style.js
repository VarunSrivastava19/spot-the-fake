import { Card } from "react-bootstrap";
import styled from "styled-components";

const Choice = styled(Card)`
  &:hover {
    box-shadow: 0 0 0 0.25rem rgba(255, 110, 199, 0.5);
    filter: drop-shadow(2px 4px 6px black);
  }
`;

export default Choice;
