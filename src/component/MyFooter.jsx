import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyNavbar() {
  return (
    <Card className=" bg-secondary mt-5 rounded-0">
      <Card.Body>
        <Card.Text>Italia | English(UK)</Card.Text>
        <Card.Text>
          Copyright 2024 <b>Apple Inc.</b> Tutti i diritti riservati.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyNavbar;
