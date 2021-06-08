import * as actions from '../';
import {
  ADD_QUESTION,
  FETCH_QUESTION_DETAILS,
  FETCH_QUESTIONS,
  RESET_ADD_QUESTION,
  SAVE_VOTE,
} from '../../constants';

describe('Actions', () => {
  test('should create an action to fetch questions', () => {
    const expectedAction = {
      type: FETCH_QUESTIONS,
    };
    expect(actions.fetchQuestions()).toEqual(expectedAction);
  });

  test('should create an action to fetch question details', () => {
    const questionNo = '12';
    const expectedAction = {
      type: FETCH_QUESTION_DETAILS,
      questionNo,
    };
    expect(actions.fetchQuestionDetails(questionNo)).toEqual(expectedAction);
  });

  test('should create an action to save vote', () => {
    const url = '/questions/12';
    const expectedAction = {
      type: SAVE_VOTE,
      url,
    };
    expect(actions.saveVote(url)).toEqual(expectedAction);
  });

  test('should create an action to add question', () => {
    const payload = { question: 'This is test question' };
    const expectedAction = {
      type: ADD_QUESTION,
      payload,
    };
    expect(actions.addQuestion(payload)).toEqual(expectedAction);
  });

  test('should create an action to reset add question', () => {
    const expectedAction = {
      type: RESET_ADD_QUESTION,
    };
    expect(actions.resetAddQuestion()).toEqual(expectedAction);
  });
});
