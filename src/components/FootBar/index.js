import { Col, Container, Row } from "react-bootstrap";
import Footer from "./style";
function FootBar() {
  return (
    <>
      <Footer>
        <Container fluid>
          <Row>
            <Col className="text-center py-3" style={{ color: "#ceaae4" }}>
              &copy; {new Date().getFullYear()} Spot-The-Fake
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
}

export default FootBar;
