import { Navbar } from "react-bootstrap";
import StyledBar from "./style";
function AppBar() {
  return (
    <StyledBar>
      <Navbar.Brand>
        <span>
          <i className="bi bi-shield-shaded"> </i>
        </span>
        Spot-The-Fake
      </Navbar.Brand>
    </StyledBar>
  );
}

export default AppBar;
