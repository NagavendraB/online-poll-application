import { addQuestion } from '../add';
import { ADD_QUESTION_SUCCESS, RESET_ADD_QUESTION } from '../../constants';

describe('add question reducer', () => {
  test('should return the initial state', () => {
    expect(addQuestion(undefined, {})).toEqual(false);
  });

  test('should handle Add and Reset the question', () => {
    expect(addQuestion(false, { type: ADD_QUESTION_SUCCESS })).toEqual(true);
    expect(addQuestion(true, { type: RESET_ADD_QUESTION })).toEqual(false);
  });
});
