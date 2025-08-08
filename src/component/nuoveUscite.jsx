import { useDispatch, useSelector } from "react-redux";
import SmallCard from "./smallCard";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Heart } from "react-bootstrap-icons";
import { ADD_TO_FAVOURITE } from "../redux/action";

const NuoveUscite = () => {
  const [red, setRed] = useState("");
  const dispatch = useDispatch();
  const [limite, setLimite] = useState(6);
  const song = useSelector((state) => {
    return state.songs.songs;
  });
  console.log(song.data);

  return (
    <>
      <Container>
        <Row>
          <h3
            onClick={() => {
              setLimite(20);
            }}
          >
            Nuove Uscite{" "}
          </h3>
          {song.data?.slice(0, limite).map((s) => {
            console.log(s);
            return (
              <Col xs={4}>
                <SmallCard
                  key={s.album.id}
                  immagine={s.album.cover_big}
                  titolo={s.album.title}
                  artista={s.artist.name}
                />
                <Heart
                  style={{ color: red }}
                  onClick={() => {
                    setRed("red");
                    dispatch({
                      type: ADD_TO_FAVOURITE,
                      payload: s,
                    });
                  }}
                />
                <SmallCard />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default NuoveUscite;
