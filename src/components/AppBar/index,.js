import { Navbar } from "react-bootstrap";
import StyledBar from "./style";
import ScoredMessages from "../../utils/scoredMessages";
function AppBar({ currentPair, score }) {
  const scoreRange = ScoredMessages.getMessage(score);
  return (
    <StyledBar backgroundColor={scoreRange.styles.backgroundColor}>
      <Navbar.Brand>Pair: {currentPair}</Navbar.Brand>
    </StyledBar>
  );
}

export default AppBar;
