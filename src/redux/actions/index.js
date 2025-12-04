export const ADD_TO_FAV = "ADD_TO_FAV";
export const DELETE_FROM_FAV = "DELETE_FROM_FAV";
export const GET_JOBS = "GET_JOBS";
export const SET_QUERY = "SET_QUERY";

export const addToFavAction = (data) => {
  return {
    type: ADD_TO_FAV,
    payload: data,
  };
};

export const deleteFromFavAction = (data) => {
  return {
    type: DELETE_FROM_FAV,
    payload: data,
  };
};

export const setQueryAction = (data) => {
  return {
    type: SET_QUERY,
    payload: data,
  };
};

export const getJobs = () => {
  return (dispatch, getState) => {
    const currentState = getState();
    let query = currentState.data.query;
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    fetch(baseEndpoint + query + "&limit=20")
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error("Errore nel recupero dati " + r.status);
      })
      .then((jobsData) => {
        console.log(jobsData);
        dispatch({
          type: GET_JOBS,
          payload: jobsData,
        });
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };
};
