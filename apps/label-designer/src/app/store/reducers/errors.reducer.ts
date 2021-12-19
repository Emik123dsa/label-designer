import { Reducer } from 'redux';

import { ErrorsAction } from '@store/actions/errors.action';
import { ErrorsState } from '@store/domains/errors.state';
import { initialErrorsState } from '@store/state/errors.state';

export const errorsReducer: Reducer<ErrorsState, ErrorsAction> = (
  state: ErrorsState = initialErrorsState,
  action: ErrorsAction
): ErrorsState => {
  return state;
};
