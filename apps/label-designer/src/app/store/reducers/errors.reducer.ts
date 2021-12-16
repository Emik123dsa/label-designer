import { AnyAction } from 'redux';

import { ErrorsState } from '@store/domains/errors.state';
import { initialErrorsState } from '@store/state/errors.state';

export const errorsReducer: (
  state: ErrorsState,
  action: AnyAction
) => ErrorsState = (
  state: ErrorsState = initialErrorsState,
  action: AnyAction
): ErrorsState => {
  return state;
};
