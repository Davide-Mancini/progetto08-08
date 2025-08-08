import Card from "react-bootstrap/Card";

function SmallCard({ immagine, titolo, artista }) {
  return (
    <Card className=" mx-2 border-0">
      <Card.Img variant="top" src={immagine} />
      <Card.Body>
        <Card.Title>{titolo}</Card.Title>
        <Card.Text>{artista}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SmallCard;
