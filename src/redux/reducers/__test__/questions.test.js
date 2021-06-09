import { questions } from '../questions';
import { UPDATE_QUESTIONS } from '../../constants';

describe('questions reducer', () => {
  test('should return the initial state', () => {
    expect(questions(undefined, [])).toEqual([]);
  });

  test('should handle updated questions', () => {
    expect(questions([], {
      type: UPDATE_QUESTIONS,
      payload: [{
        question: 'This is the test question 1',
        choices: [{
          choice: 'Choice 1',
          url: '/questions/31/choices/126',
          votes: 4,
        },
        {
          choice: 'Choice 2',
          url: '/questions/31/choices/126',
          votes: 4,
        }],
      },
      {
        question: 'This is the test question 2',
        choices: [{
          choice: 'Choice 2',
          url: '/questions/31/choices/126',
          votes: 4,
        }],
      }],
    })).toEqual([{
      question: 'This is the test question 1',
      choices: [{
        choice: 'Choice 1',
        url: '/questions/31/choices/126',
        votes: 4,
      },
      {
        choice: 'Choice 2',
        url: '/questions/31/choices/126',
        votes: 4,
      }],
    },
    {
      question: 'This is the test question 2',
      choices: [{
        choice: 'Choice 2',
        url: '/questions/31/choices/126',
        votes: 4,
      }],
    }]);
  });
});
