import {
  ADD_TO_FAVORITES,
  REMOVE_FAVORITE,
  SORT,
  FILTER,
  RESET,
} from "./action-types";
import axios from "axios";

export const addFavorite = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({data}) => {
      return dispatch({
        type: ADD_TO_FAVORITES,
        payload: data,
      });
    });
  };
};

export const removeFavorite = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({data}) => {
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    });
  };
};

export function filterByGender(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function sortById(order) {
  return {
    type: SORT,
    payload: order,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
