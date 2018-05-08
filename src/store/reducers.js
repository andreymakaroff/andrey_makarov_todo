import { REMOVE_USER, SET_INFO, SET_TASK_LIST, SET_USER, UPDATE_TASK_LIST, UPDATE_USER, } from './actions';

// cell "user" in store
export const user = (state = false, { type, data }) => {
  switch (type) {
    case UPDATE_USER:// the same
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

export const info = (state = {}, { type, data }) => {
  switch (type) {
    case SET_INFO: {
      return data;
    }
  }

  return state;
};
