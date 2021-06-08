import * as actions from '../api';
import { API_REQUEST, HIDE_LOADER, SHOW_LOADER } from '../../constants';

describe('API actions', () => {
  test('should create an action API request', () => {
    const body = { test: 'This is testing..' };
    const method = 'GET';
    const url = 'www.google.com';
    const expectedAction = {
      type: API_REQUEST,
      payload: body,
      meta: {
        method, body, url,
      },
    };
    expect(actions.apiRequest(method, url, body)).toEqual(expectedAction);
  });

  test('should create an action Show loader', () => {
    const expectedAction = {
      type: SHOW_LOADER,
    };
    expect(actions.showLoader()).toEqual(expectedAction);
  });

  test('should create an action Hide loader', () => {
    const expectedAction = {
      type: HIDE_LOADER,
    };
    expect(actions.hideLoader()).toEqual(expectedAction);
  });
});
