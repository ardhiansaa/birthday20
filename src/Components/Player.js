import { Container, Row, Col } from "react-bootstrap";
import YouTubePlayer from "./YoutubePlayer";

export const Player = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h2>Merayakan</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="text-center">
            <YouTubePlayer videoId="GKzMYMnTb1o" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
