import {ADD_TO_FAVORITES, REMOVE_FAVORITE} from "../actions/action-types";

let initialState = {characters: [], favorites: []};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (characters) => characters.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default rootReducer;
