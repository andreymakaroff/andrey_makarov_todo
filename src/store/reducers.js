import { SET_USER, UPDATE_USER, REMOVE_USER } from './actions';

// ячейка юзер в сторе
export const user = (state = false, { type, data }) => {
  switch (type) {
    case UPDATE_USER:   // если то же самое
    case SET_USER: {
      return data;
    }

    case REMOVE_USER:
      return null;
  }

  return state;
};
