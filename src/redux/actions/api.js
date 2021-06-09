import { API_REQUEST, HIDE_LOADER, SHOW_LOADER } from '../constants';

export const apiRequest = (method, url, body, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: body,
  meta: {
    method, body, url, onSuccess, onError,
  },
});

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

