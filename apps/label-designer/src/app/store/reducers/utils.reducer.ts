import { AnyAction } from 'redux';

import { UtilsState } from '@store/domains/utils.state';
import { initialUtilsState } from '@store/state/utils.state';

export const utilsReducer: (
  state: UtilsState,
  action: AnyAction
) => UtilsState = (
  state: UtilsState = initialUtilsState,
  action: AnyAction
): UtilsState => {
  return state;
};
