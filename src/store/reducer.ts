import { AppState, RootActionsTypes as types, TActions } from "./types";

const initialState: AppState = {
  value: 0,
  isPinging: false,
  user: '',
  response: {} as any,
  error: {},
}

export const selectValue = (state: AppState) => state.value;
export const selectIsPinging = (state: AppState) => state.isPinging;
export const selectUserDescription = (state: AppState) => ({
  url: state.response.html_url,
  avatar: state.response.avatar_url
});
export const selectErrorJSON = (state: AppState) => state.error?.response?.message

export const rootReducer = (
  state: AppState = initialState, 
  action: TActions
): AppState => {
  switch(action.type) {
    case types.INCREASE:
      return {
        ...state,
        value: state.value + 1
      }
    case types.DECREASE:
      return {
        ...state,
        value: state.value - 1
      }
    case types.PING:
      return {
        ...state,
        isPinging: true 
      };
    case types.PONG:
      return {
        ...state,
        isPinging: false 
      };
    case types.FETCH_ON_INPUT:
      return {
        ...state,
        isPinging: true,
      }
    case types.FETCH_USER_FULFILLED:
      return {
        ...state,
        isPinging: false,
        response: action.response,
        error: ''
      }
    case types.ERROR:
      return {
        ...state,
        isPinging: false,
        error: action.error,
      }
    default: 
      return {
        ...state,
      }
  }
}
