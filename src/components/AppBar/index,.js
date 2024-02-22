import { Navbar } from "react-bootstrap";
import StyledBar from "./style";
function AppBar({ currentPair }) {
  return (
    <StyledBar>
      <Navbar.Brand>Pair: {currentPair}</Navbar.Brand>
    </StyledBar>
  );
}

export default AppBar;
