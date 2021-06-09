import { ADD_QUESTION_SUCCESS, RESET_ADD_QUESTION } from '../constants';

export const addQuestion = (state = false, action) => {
  switch (action.type) {
    case ADD_QUESTION_SUCCESS: {
      return true;
    }
    case RESET_ADD_QUESTION: {
      return false;
    }
    default:
      return state;
  }
};
