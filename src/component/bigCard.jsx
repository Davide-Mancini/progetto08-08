import { Card, Col, Container, Row } from "react-bootstrap";

const BigCard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className=" border-0">
              <Card.Body>
                <p className=" fw-bold">
                  <small>NUOVA STAZIONE RADIO</small>
                </p>
                <Card.Text className=" fs-3 ">
                  Rilassati, al resto pensiamo noi. <br /> Ascolta Apple Music
                  Chill
                </Card.Text>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="./src/assets/images/1a.png"
                className=" rounded-4"
              />
            </Card>
          </Col>
          <Col>
            <Card className=" border-0">
              <Card.Body>
                <p className=" fw-bold">
                  <small>NUOVA STAZIONE RADIO</small>
                </p>
                <Card.Text className=" fs-3 ">
                  Rilassati, al resto pensiamo noi. <br /> Ascolta Apple Music
                  Chill
                </Card.Text>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="./src/assets/images/1b.png"
                className=" rounded-4"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default BigCard;
