import { combineEpics, ofType, Epic } from 'redux-observable';
import { delay, mapTo, catchError, switchMap,filter, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { from, merge, Observable } from 'rxjs';

import { RootActionsTypes as types, TActions, AppState } from "./types";
import { errorAction, fetchUserFulfilled, increaseValue, pong } from './actions';

type AppEpic = Epic<TActions, TActions, AppState>

export const pingEpic: AppEpic = (action$) => action$.pipe(
  ofType(types.PING),
  delay(1000),
  mapTo(pong())
);

export const increaseIfUnderTenEpic: AppEpic = (action$, state$) => action$.pipe(
  ofType(types.INCREASE_IF_UNDER_TEN),
  filter(() =>  state$.value.value < 10),
  mapTo(increaseValue())
);

// We have to narrow down the type
// Using 'in' allows typescript to infer the correct type from the union type, 
// Try to avoid explicit type casting 
export const fetchOnInputEpic: AppEpic = (action$) => action$.pipe(
  ofType(types.FETCH_ON_INPUT),
  debounceTime(400),
  distinctUntilChanged(),
  switchMap((action) => merge(
    ajax.getJSON(`https://api.github.com/users/${'name' in action && action.name}`).pipe(
      map(response => fetchUserFulfilled(response)),
      catchError((error) => from([errorAction(error)]))
    ),
    // ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${action.name.length}`).pipe(
    //   map(response => fetchUserFulfilled(response)),
    //   catchError((error) => from([errorAction(error)]))
    // ),
    )
  )
);

const epics = [
  pingEpic,
  increaseIfUnderTenEpic,
  fetchOnInputEpic,
]

export const rootEpic: Epic = (action$, state$, dependencies): Observable<TActions> =>
  combineEpics(...epics)(action$, state$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source;
    })
  );
