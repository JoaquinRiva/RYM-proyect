import {
  ADD_TO_FAVORITES,
  FILTER,
  REMOVE_FAVORITE,
  SORT,
  RESET,
} from "../actions/action-types";

let initialState = {allCharacters: [], favorites: []};

function rootReducer(state = initialState, action) {
  let sorted;
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        allCharacters: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (characters) => characters.id !== action.payload
        ),
        allCharacters: state.allCharacters.filter(
          (characters) => characters.id !== action.payload
        ),
      };

    case FILTER:
      return {
        ...state,
        favorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    case SORT:
      if (action.payload === "Ascendente") {
        sorted = state.favorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        sorted = state.favorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }

      return {
        ...state,
        favorites: [...sorted],
      };

    case RESET:
      return {
        ...state,
        favorites: state.allCharacters,
      };

    default:
      return state;
  }
}

export default rootReducer;
