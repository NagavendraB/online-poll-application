import { apiRequest } from '../actions/api';
import endpoints from '../../api/endpoints';
import {
  FETCH_QUESTIONS,
  FETCH_QUESTION_DETAILS,
  ADD_QUESTION,
  SAVE_VOTE,
  UPDATE_QUESTIONS,
  UPDATE_QUESTION_DETAILS,
  UPDATE_VOTE,
  API_ERROR, ADD_QUESTION_SUCCESS,
} from '../constants';

export const pollCustomMiddleware = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type === FETCH_QUESTIONS) {
    dispatch(apiRequest(
      'GET',
      endpoints.questions,
      null,
      UPDATE_QUESTIONS,
      API_ERROR,
    ));
  }
  if (action.type === FETCH_QUESTION_DETAILS) {
    dispatch(apiRequest(
      'GET',
      endpoints.fetchQuestionDetails(action.questionNo),
      null,
      UPDATE_QUESTION_DETAILS,
      API_ERROR,
    ));
  }
  if (action.type === SAVE_VOTE) {
    dispatch(apiRequest(
      'POST',
      endpoints.saveVote(action.url),
      null,
      UPDATE_VOTE,
      API_ERROR,
    ));
  }
  if (action.type === ADD_QUESTION) {
    dispatch(apiRequest(
      'POST',
      endpoints.questions,
      action.payload,
      ADD_QUESTION_SUCCESS,
      API_ERROR,
    ));
  }
};

