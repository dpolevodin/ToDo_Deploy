import { affairsActionTypes } from "./actions";

const storageAffairs = window.localStorage;
console.log(storageAffairs);

const parseToDoAffair =
  storageAffairs.todo != null ? JSON.parse(storageAffairs.todo) : [];
console.log(parseToDoAffair);
const parseDoneAffair =
  storageAffairs.done != null ? JSON.parse(storageAffairs.done) : [];
console.log(parseDoneAffair);

const initialState = {
  todo: [...parseToDoAffair],
  done: [...parseDoneAffair],
};

export const affairsReducer = (state = initialState, action) => {
  switch (action.type) {
    case affairsActionTypes.SET_AFFAIRS:
      return { ...state, todo: [...state.todo, action.payload] };
    case affairsActionTypes.DELETE_AFFAIR:
      return {
        ...state,
        todo: state.todo.filter((item) => item !== action.payload),
      };
    case affairsActionTypes.CLEAR:
      return initialState;
    case affairsActionTypes.DONE_AFFAIR:
      return {
        ...state,
        todo: [...state.todo.filter((item) => item !== action.payload)],
        done: [...state.done, action.payload],
      };
    default:
      return state;
  }
};
