import { Reducer } from 'redux';

import { UtilsState } from '@store/domains/utils.state';
import { initialUtilsState } from '@store/state/utils.state';
import { UtilsAction } from '@store/actions/utils.action';

export const utilsReducer: Reducer<UtilsState, UtilsAction> = (
  state: UtilsState = initialUtilsState,
  action: UtilsAction
): UtilsState => {
  return state;
};
