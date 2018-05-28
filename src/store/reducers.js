import {
  DELETE_TASK,
  REMOVE_USER,
  SET_ERROR,
  SET_INFO,
  SET_TASK_LIST,
  SET_USER,
  UPDATE_TASK_LIST,
  UPDATE_USER,
  UPDATE_TASK,
  CREATE_TASK
} from './actions';

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

    case CREATE_TASK: {
      const newState = [...state];
      newState[data.day].push(data);
      return newState;
    }

    case UPDATE_TASK: {
      const newState = [...state];
      const index = newState[data.day].findIndex(el => el.id === data.id);
      newState[data.day][index] = data;
      return newState;
    }

    case DELETE_TASK: {
      return state.map(day => day.filter(el => el.id !== data.id));
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

export const error = (state = '', { type, data = '' }) => {
  switch (type) {
    case SET_ERROR: {
      return data;
    }
  }

  return state;
};
