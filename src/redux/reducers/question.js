import { UPDATE_QUESTION_DETAILS, UPDATE_VOTE } from '../constants';

export const question = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_QUESTION_DETAILS: {
      return action.payload;
    }
    case UPDATE_VOTE: {
      const data = action.payload;
      return {
        ...state,
        choices: state.choices.map((item) => {
          if (item.url === data.url) {
            return data;
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
};
