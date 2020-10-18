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

export const selectSequence = (state: AppState) => state.sequence;

export const parentSelector = createSelector(
  (state: AppState) => state,
  (state) => ({
    value: state.value,
    isPing: state.isPinging,
    user: {
      url: state.response.html_url,
      avatar: state.response.avatar_url,
    },
    error: state.error?.response?.message,
  }),
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
