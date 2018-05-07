import {
  SET_USER,
  UPDATE_USER,
  REMOVE_USER,
  SET_TASK_LIST,
  UPDATE_TASK_LIST
} from './actions';

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

export const taskList = (state = [], { type, data }) => {
  switch (type) {
    case SET_TASK_LIST:
    case UPDATE_TASK_LIST: {
      return data;
    }
  }

  return state;
};
