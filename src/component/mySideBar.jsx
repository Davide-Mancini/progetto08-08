import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/style.css";
import {
  Broadcast,
  Heart,
  HouseDoor,
  UiChecksGrid,
} from "react-bootstrap-icons";
import { Link, Links } from "react-router-dom";

function MySidebar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary flex-column d-none d-sm-none d-md-none d-lg-flex h-100 "
    >
      <Container fluid className="flex-column align-items-start">
        <Link to={"/"}>
          <img
            src="./src/assets/logos/music.svg"
            alt=""
            className="logo my-3 text-start "
          />
        </Link>
        <Form className="d-flex my-3">
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" my-2 my-lg-0 flex-column text-start" navbarScroll>
            <Link to={"/"} className=" nav-link">
              <b>
                {" "}
                <HouseDoor className=" text-danger" /> Home
              </b>
            </Link>
            <Nav.Link href="#action2">
              <b>
                {" "}
                <UiChecksGrid className=" text-danger" /> Novità
              </b>
            </Nav.Link>
            <Nav.Link href="#action2">
              <b>
                {" "}
                <Broadcast className=" text-danger" /> Radio
              </b>
            </Nav.Link>
            <Link to={"/favourite"} className=" nav-link">
              <b>
                {" "}
                <Heart className=" text-danger" /> Preferiti
              </b>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MySidebar;
