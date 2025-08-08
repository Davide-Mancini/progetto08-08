import { Col, Container, Row } from "react-bootstrap";
import SmallCard from "./smallCard";

const NuoviEpisodiRadio = () => {
  return (
    <>
      <Container>
        <Row>
          <h2 className=" mt-5">Nuovi Episodi radio</h2>
          <Col xs={4} md={3}>
            <SmallCard
              immagine={"./src/assets/images/2a.png"}
              titolo={"Prologo con Abuelo"}
            />
          </Col>
          <Col xs={4} md={3}>
            <SmallCard
              immagine={"./src/assets/images/2b.png"}
              titolo={"The Wandered"}
            />
          </Col>
          <Col xs={4} md={3}>
            <SmallCard
              immagine={"./src/assets/images/2c.png"}
              titolo={"Michael Bublè & Charly Pearce"}
            />
          </Col>
          <Col className=" d-none  d-sm-none d-lg-flex" md={3}>
            <SmallCard
              immagine={"./src/assets/images/2d.png"}
              titolo={"Michael Bublè & Charly Pearce"}
            />
          </Col>
          <Col className="  d-none d-sm-none d-lg-flex" md={3}>
            <SmallCard
              immagine={"./src/assets/images/2e.png"}
              titolo={"Michael Bublè & Charly Pearce"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NuoviEpisodiRadio;
