import { History } from 'history';
import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';

import { errorsReducer } from './errors.reducer';
import { formsReducer } from './forms.reducer';
import { utilsReducer } from './utils.reducer';

import type { AppRouterState } from '@store/domains/app.state';

export const appReducer: (
  currentHistory: History
) => Reducer<CombinedState<AppRouterState>, AnyAction> = (
  currentHistory: History
): Reducer<CombinedState<AppRouterState>, AnyAction> =>
  combineReducers({
    router: connectRouter(currentHistory),
    forms: formsReducer,
    utils: utilsReducer,
    errors: errorsReducer,
  });
