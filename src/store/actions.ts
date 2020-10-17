import { RootActionsTypes as types, TActions } from "./types";

export const increaseValue = (): TActions => ({ 
  type: types.INCREASE
})

export const increaseIfUnderZero = (): TActions => ({ 
  type: types.INCREASE_IF_UNDER_ZERO
})

export const decreaseValue = (): TActions => ({ 
  type: types.DECREASE
})

export const ping = (): TActions => ({ 
  type: types.PING 
})

export const pong = (): TActions => ({ 
  type: types.PONG 
})

export const fetchUser = (username: string): TActions => ({ 
  type: types.FETCH_USER, 
  username, 
});

export const fetchUserFulfilled = (response: any): TActions => ({ 
  type: types.FETCH_USER_FULFILLED, 
  response,
});

export const createName = (name: string): TActions => ({ 
  type: types.CREATE_NAME, 
  name,
});

export const callOnInput = (name: string): TActions => ({ 
  type: types.CALL_ON_INPUT, 
  name,
});

export const errorAction = (error: any): TActions => ({ 
  type: types.ERROR,
  error,
});
