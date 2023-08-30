import {
  ADD_TO_FAVORITES,
  REMOVE_FAVORITE,
  SORT,
  FILTER,
  RESET,
} from "./action-types";

export function addFavorite(character) {
  return {
    type: ADD_TO_FAVORITES,
    payload: character,
  };
}

export function removeFavorite(id) {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
}

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
