import { axiosWithAuth } from '../utils/axiosWithAuth';

export const USER_LOGIN = 'USER_LOGIN';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const FETCH_PLANTS = 'FETCH_PLANTS';
export const SET_USER_PLANTS = 'SET_USER_PLANTS';
export const DELETE_PLANT = 'DELETE_PLANT';

export const userLogin = () => (dispatch) => {
  dispatch({ type: USER_LOGIN });

  axiosWithAuth()
    .post('/auth/login')
    .then((res) => {
      dispatch({ type: SET_USER_TOKEN, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_LOGIN_FAILURE, payload: JSON.stringify(err) });
    });
};

export const fetchPlants = () => (dispatch) => {
  dispatch({ type: FETCH_PLANTS });

  axiosWithAuth()
    .get('/plants')
    .then((res) => {
      dispatch({ type: SET_USER_PLANTS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const deletePlant = (id) => (dispatch) => {
  dispatch({ type: DELETE_PLANT });

  axiosWithAuth()
    .delete(`/plants/${id}`)
    .then((res) => {
      fetchPlants();
    })
    .catch((err) => console.log(err));
};
