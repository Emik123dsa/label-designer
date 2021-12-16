import { History } from 'history';

import { connectRouter, RouterState } from 'connected-react-router';
import {
  Action,
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from 'redux';
import { AppState } from '@store/domains/app.state';

import { errorsReducer } from './errors.reducer';
import { formsReducer } from './forms.reducer';
import { utilsReducer } from './utils.reducer';

export const appReducer: (history: History) => Reducer<
  CombinedState<
    | {
        router: RouterState<unknown>;
      }
    | AppState
  >,
  AnyAction
> = (
  history: History
): Reducer<
  CombinedState<
    | {
        router: RouterState<unknown>;
      }
    | AppState
  >,
  AnyAction
> =>
  combineReducers({
    router: connectRouter(history),
    forms: formsReducer,
    utils: utilsReducer,
    errors: errorsReducer,
    // TODO: resolve combine reducers errors.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as Reducer<CombinedState<any>, AnyAction>;
