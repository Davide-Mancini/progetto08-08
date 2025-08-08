import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyFavourite = () => {
  const favourites = useSelector((state) => {
    console.log(state);
    return state.favourite.favourite;
  });
  return (
    <>
      <h1 className=" text-center my-5  ">I MIEI BRANI PREFERITI</h1>
      <Container>
        <Row>
          {favourites.map((favourite, i) => {
            return (
              <Col sm={3} key={i}>
                <img src={favourite.album.cover_medium} alt="" />
                <h5>{favourite.album.title}</h5>
                <h6>{favourite.artist.name}</h6>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default MyFavourite;
