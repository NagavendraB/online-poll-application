import { hideLoader, showLoader } from '../actions/api';
import { API_REQUEST } from '../constants';

// this middleware care only for API calls
export const api = ({ dispatch }) => next => (action) => {
  if (action.type === API_REQUEST) {
    const {
      method, url, body, onSuccess, onError,
    } = action.meta;
    dispatch(showLoader());
    fetch(url, {
      method,
      ...(body && { body: JSON.stringify(body) }),
      ...(body && {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    })
      .then(response => response.json())
      .then(data => dispatch({ type: onSuccess, payload: data }))
      .catch(error => dispatch({ type: onError, payload: error }))
      .finally(() => dispatch(hideLoader()));
  }
  return next(action);
};
