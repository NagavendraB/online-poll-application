import { UPDATE_QUESTIONS } from '../constants';

export const questions = (state = [], action) => {
  switch (action.type) {
    case UPDATE_QUESTIONS: {
      return action.payload;
    }
    default:
      return state;
  }
};
