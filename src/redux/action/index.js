export const GET_SONGS = "GET_SONGS";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";

export const getSongsActions = () => {
  return (dispatch) => {
    fetch(
      " https://striveschool-api.herokuapp.com/api/deezer/search?q=gemitaiz"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero canzoni...");
        }
      })
      .then((songsArray) => {
        console.log(songsArray);
        dispatch({
          type: GET_SONGS,
          payload: songsArray,
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };
};
