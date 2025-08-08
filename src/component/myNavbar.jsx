import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style/style.css";
import { Button, Col } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import ControlloVolume from "./controlloVolume";
import MyPLayer from "./MyPlayer";
import { Link } from "react-router-dom";
function MyNavbar() {
  return (
    <Navbar expand="lg" className=" bg-body-secondary" data-bs-theme="dark">
      <Container className="  justify-content-between  align-items-center flex-nowrap">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <div className=" d-flex align-items-center justify-content-between w-100">
          <Col lg={3}>
            <MyPLayer />
          </Col>
          <Col lg={5}>
            <Link to={"/"} className=" d-flex justify-content-center  h-100">
              <img
                src="./src/assets/logos/music.svg"
                alt=""
                className="logo text-center d-lg-none"
              />
              <div className=" bg-secondary w-100 d-lg-flex justify-content-center p-2 d-none d-sm-none d-md-none">
                <img
                  src="./src/assets/logos/apple.svg"
                  alt=""
                  className="logo text-center d-none d-lg-flex"
                />
              </div>
            </Link>
          </Col>
          <Col lg={2}>
            <ControlloVolume />
          </Col>
          <Col lg={1}>
            <Nav.Link href="#link" className=" text-danger  d-lg-none">
              Accedi
            </Nav.Link>
            <Button
              variant="danger"
              className=" d-none d-sm-none d-md-none d-lg-flex align-items-center"
            >
              {" "}
              <Person className=" me-1" /> Accedi
            </Button>
          </Col>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
