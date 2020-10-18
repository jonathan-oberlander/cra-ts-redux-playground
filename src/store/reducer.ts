import { createSelector } from 'reselect';
import { AppState, RootActionsTypes as types, TActions } from './types';

const initialState: AppState = {
  value: 0,
  isPinging: false,
  user: '',
  response: {} as any,
  error: {},
  steps: [],
  sequence: {
    a: false,
    b: false,
    c: false,
  },
};

export const selectStore = (state: AppState) => state;
export const selectSequence = (state: AppState) => state.sequence;
export const selectPing = (state: AppState) => state.isPinging;
export const selectUser = createSelector(selectStore, (state) => ({
  url: state.response.html_url,
  avatar: state.response.avatar_url,
}));
export const selectValue = createSelector(selectStore, (state) => state.value);
export const selectError = createSelector(
  selectStore,
  (state) => state.error?.response?.message,
);

export const rootReducer = (
  state: AppState = initialState,
  action: TActions,
): AppState => {
  switch (action.type) {
    case types.INCREASE:
      return {
        ...state,
        value: state.value + 1,
      };
    case types.DECREASE:
      return {
        ...state,
        value: state.value - 1,
      };
    case types.PING:
      return {
        ...state,
        isPinging: true,
      };
    case types.PONG:
      return {
        ...state,
        isPinging: false,
      };
    case types.FETCH_ON_INPUT:
      return {
        ...state,
        isPinging: true,
      };
    case types.FETCH_USER_FULFILLED:
      return {
        ...state,
        isPinging: false,
        response: action.response,
        error: '',
      };
    case types.ERROR:
      return {
        ...state,
        isPinging: false,
        error: action.error,
      };
    case types.STEPS:
      return {
        ...state,
        steps: action.steps,
      };
    case types.SEQUENCE:
      return {
        ...state,
        sequence: action.sequence,
      };
    default:
      return {
        ...state,
      };
  }
};
