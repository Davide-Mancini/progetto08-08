import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import MyNavbar from "./component/myNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

import MySideBar from "./component/mySideBar";
import Novità from "./component/novità";
import NuoviEpisodiRadio from "./component/nuoviEpisodiRadio";
import NuoveUscite from "./component/nuoveUscite";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSongsActions } from "./redux/action";

import AltroDaEsplorare from "./component/altroDaEsplorare";
import MyFooter from "./component/MyFooter";
import MyPLayer from "./component/MyPlayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFavourite from "./component/MyFavourite";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsActions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col md={2} className="p-0">
              <MySideBar />
            </Col>
            <Col xs={12} md={10} className=" p-0">
              <MyNavbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Novità />
                      <NuoviEpisodiRadio />
                      <NuoveUscite />
                      <AltroDaEsplorare />
                    </>
                  }
                ></Route>
                {/* <Route path="/" element={}></Route>
                <Route path="/" element={}></Route>
                <Route path="/" element={}></Route> */}
              </Routes>
            </Col>
          </Row>
        </Container>
        <Routes>
          <Route path="/favourite" element={<MyFavourite />}></Route>
        </Routes>
        <MyPLayer />
        <MyFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
