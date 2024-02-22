import { Navbar } from "react-bootstrap";
import styled from "styled-components";

const StyledBar = styled(Navbar)`
  background: ${(props) =>
    typeof props.backgroundColor ? "#ceaae4" : props.backgroundColor};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default StyledBar;
