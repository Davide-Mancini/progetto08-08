import { Col, Container, Row } from "react-bootstrap";
import ButtonAltroDaEsplorare from "./buttonAltroDaEsplorare";

const AltroDaEsplorare = () => {
  return (
    <>
      <Container>
        <Row>
          <h3> Altro da esplorare</h3>
          <Col lg={4}>
            <ButtonAltroDaEsplorare testo={"Esplora Genere"} />
          </Col>
          <Col lg={4}>
            <ButtonAltroDaEsplorare testo={"Decenni"} />
          </Col>
          <Col lg={4}>
            <ButtonAltroDaEsplorare testo={`Attività e stati d'animo`} />
          </Col>
          <Col lg={4}>
            <ButtonAltroDaEsplorare testo={"Worlwide"} />
          </Col>
          <Col lg={4}>
            <ButtonAltroDaEsplorare testo={"Classifiche"} />
          </Col>
          <Col lg={4}>
            <ButtonAltroDaEsplorare testo={"Audio spaziale"} />
          </Col>
          <Col lg={4}>
            <ButtonAltroDaEsplorare testo={"Video Musicali"} />
          </Col>
          <Col lg={4}>
            <ButtonAltroDaEsplorare testo={"Nuovi Artisti"} />
          </Col>
          <Col lg={4}>
            <ButtonAltroDaEsplorare testo={"Hit del passato"} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AltroDaEsplorare;
