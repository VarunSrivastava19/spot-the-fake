import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

export const CardButton = styled(Button)`
  color: #000;
`;

export const CardFooter = styled(Card.Footer)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
