export enum RootActionsTypes {
  INCREASE = '@rdxObs/increase',
  INCREASE_IF_UNDER_ZERO = '@rdxObs/increaseIfUnderZero',
  DECREASE = '@rdxObs/decrease',
  PING = '@rdxObs/ping',
  PONG = '@rdxObs/pong',
  FETCH_USER = '@rdxObs/fetchUser',
  FETCH_USER_FULFILLED = '@rdxObs/fetchUserFulfilled',
  CREATE_NAME = '@rdxObs/createName',
  CALL_ON_INPUT = '@rdxObs/callOnInput',
  ERROR = '@rdxObs/error',
}

export type AppState = {
  value: number,
  isPinging: boolean,
  user: string,
  response: any,
  error: any,
};

export type Increase = {
  type: RootActionsTypes.INCREASE
}
export type IncreaseIfUnderZero = {
  type: RootActionsTypes.INCREASE_IF_UNDER_ZERO
}
export type Decrease = {
  type: RootActionsTypes.DECREASE
}
export type Ping = {
  type: RootActionsTypes.PING
}
export type Pong = {
  type: RootActionsTypes.PONG
}
export type FetchUser = {
  type: RootActionsTypes.FETCH_USER,
  username: string,
}
export type FetchUserFulfilled = {
  type: RootActionsTypes.FETCH_USER_FULFILLED,
  response: any,
}
export type CreateName = {
  type: RootActionsTypes.CREATE_NAME,
  name: string,
}
export type CallOnInput = {
  type: RootActionsTypes.CALL_ON_INPUT,
  name: string,
}
export type ErrorAction = {
  type: RootActionsTypes.ERROR,
  error: any,
}

export type TActions = 
  | Increase
  | IncreaseIfUnderZero
  | Decrease
  | Ping
  | Pong
  | FetchUser
  | FetchUserFulfilled
  | CreateName
  | CallOnInput
  | ErrorAction

