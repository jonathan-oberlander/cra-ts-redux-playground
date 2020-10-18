import { ABC, RootActionsTypes as types, TActions } from './types';

export const increaseValue = (): TActions => ({
  type: types.INCREASE,
});

export const increaseIfUnderTen = (): TActions => ({
  type: types.INCREASE_IF_UNDER_TEN,
});

export const decreaseValue = (): TActions => ({
  type: types.DECREASE,
});

export const ping = (): TActions => ({
  type: types.PING,
});

export const pong = (): TActions => ({
  type: types.PONG,
});

export const createName = (name: string): TActions => ({
  type: types.CREATE_NAME,
  name,
});

export const fetchUser = (username: string): TActions => ({
  type: types.FETCH_USER,
  username,
});

export const fetchUserFulfilled = (response: any): TActions => ({
  type: types.FETCH_USER_FULFILLED,
  response,
});

export const fetchOnInput = (name: string): TActions => ({
  type: types.FETCH_ON_INPUT,
  name,
});

export const errorAction = (error: any): TActions => ({
  type: types.ERROR,
  error,
});

export const steps = (steps: Array<number>): TActions => ({
  type: types.STEPS,
  steps,
});

export const sequence = (sequence: ABC): TActions => ({
  type: types.SEQUENCE,
  sequence,
});

export const stopSequence = (): TActions => ({
  type: types.STOP_SEQUENCE,
});
