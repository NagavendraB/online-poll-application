import { combineReducers } from 'redux';

import { apiReducer } from './api';
import { question } from './question';
import { questions } from './questions';
import { addQuestion } from './add';

export const reducer = combineReducers({
  question,
  questions,
  loading: apiReducer,
  isQuestionAdded: addQuestion,
});

