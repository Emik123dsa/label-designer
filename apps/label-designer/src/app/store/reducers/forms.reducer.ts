import { AnyAction } from 'redux';

import { FormsState } from '@store/domains/forms.state';
import { initialFormsState } from '@store/state/forms.state';

// FormsState simple reducer.
export const formsReducer: (
  state: FormsState,
  action: AnyAction
) => FormsState = (
  state: FormsState = initialFormsState,
  action: AnyAction
): FormsState => {
  return state;
};
