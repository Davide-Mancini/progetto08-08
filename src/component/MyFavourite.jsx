import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyFavourite = () => {
  const favourites = useSelector((state) => {
    console.log(state);
    return state.favourite.favourite;
  });
  return (
    <>
      <h1>I MIEI BRANI PREFERITI</h1>
      <Container>
        <Row>
          <Col sm={12}>
            <ul style={{ listStyle: "none" }}>
              {favourites.map((favourite, i) => {
                <li key={i}>
                  <h5>{favourite.album.title}</h5>
                  <h6>{favourite.artist.name}</h6>
                </li>;
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyFavourite;
