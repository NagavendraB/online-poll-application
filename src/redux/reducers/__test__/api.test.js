import { apiReducer } from '../api';
import { SHOW_LOADER, HIDE_LOADER } from '../../constants';

describe('api reducer', () => {
  test('should return the initial state', () => {
    expect(apiReducer(undefined, {})).toEqual(false);
  });

  test('should handle ADD_TODO', () => {
    expect(apiReducer(false, { type: SHOW_LOADER })).toEqual(true);
    expect(apiReducer(true, { type: HIDE_LOADER })).toEqual(false);
  });
});
