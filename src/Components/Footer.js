import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>Kado kecil dari Ardhian Saputra</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>26 September 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
