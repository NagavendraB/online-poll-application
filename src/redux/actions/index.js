import {
  FETCH_QUESTIONS,
  FETCH_QUESTION_DETAILS,
  ADD_QUESTION,
  RESET_ADD_QUESTION,
  SAVE_VOTE,
} from '../constants';

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
});

export const fetchQuestionDetails = questionNo => ({
  type: FETCH_QUESTION_DETAILS,
  questionNo,
});

export const saveVote = url => ({
  type: SAVE_VOTE,
  url,
});

export const addQuestion = payload => ({
  type: ADD_QUESTION,
  payload,
});

export const resetAddQuestion = () => ({
  type: RESET_ADD_QUESTION,
});
