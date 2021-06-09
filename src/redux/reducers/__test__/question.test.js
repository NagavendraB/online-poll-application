import { question } from '../question';
import { UPDATE_QUESTION_DETAILS, UPDATE_VOTE } from '../../constants';

describe('question reducer', () => {
  test('should return the initial state', () => {
    expect(question(undefined, {})).toEqual({});
  });

  test('should handle updated the question details', () => {
    expect(question({
      question: 'This is the test Question ?',
      choices: [{
        choice: 'Risotto',
        url: '/questions/31/choices/126',
        votes: 3,
      }],
    }, {
      type: UPDATE_QUESTION_DETAILS,
      payload: {
        question: 'This is the updated test question ?',
        choices: [{
          choice: 'Risotto',
          url: '/questions/31/choices/126',
          votes: 4,
        }],
      },
    })).toEqual({
      question: 'This is the updated test question ?',
      choices: [{
        choice: 'Risotto',
        url: '/questions/31/choices/126',
        votes: 4,
      }],
    });
  });

  test('should handle update vote', () => {
    expect(question({
      question: 'This is the test Question ?',
      choices: [{
        choice: 'Risotto',
        url: '/questions/31/choices/126',
        votes: 3,
      }],
    }, {
      type: UPDATE_VOTE,
      payload: {
        question: 'This is the test Question ?',
        choices: [{
          choice: 'Risotto',
          url: '/questions/31/choices/126',
          votes: 4,
        }],
      },
    })).toEqual({
      question: 'This is the test Question ?',
      choices: [{
        choice: 'Risotto',
        url: '/questions/31/choices/126',
        votes: 3,
      }],
    });
  });
});
