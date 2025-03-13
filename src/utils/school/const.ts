import { SchoolReducerAction, SchoolReducerState } from "../../types/school";

export const schoolReducer = (
  state: SchoolReducerState,
  action: SchoolReducerAction
) => {
  const { type, payload } = action;
  switch (type) {
    case "append_schools":
      return {
        ...state,
        schools: [...state.schools, ...payload],
      };
    case "refresh_schools":
      return {
        ...state,
        schools: payload,
      };
    default:
      return state;
  }
};
