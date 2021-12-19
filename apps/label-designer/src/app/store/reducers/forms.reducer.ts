import { Reducer } from 'redux';

import {
  FormInternalConstants,
  FormInternalState,
  FormsState,
} from '@store/domains/forms.state';
import { FormsAction, FormsActionConstants } from '@store/actions/forms.action';
import { initialFormsState } from '@store/state/forms.state';
import { FormsReducerMapper } from './mappers/forms.mapper';

// FormsState simple reducer.
export const formsReducer: Reducer<FormsState, FormsAction> = (
  state: FormsState = initialFormsState,
  action: FormsAction
): FormsState => {
  switch (action.type) {
    case FormsActionConstants.InitFormsPreview:
      return {
        ...state,
        internals: new Map<FormInternalConstants, FormInternalState[]>().set(
          FormInternalConstants.PREVIEW,
          [] as FormInternalState[]
        ),
      };
    case FormsActionConstants.InitFormsPreviewSuccess:
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        internals: new Map<FormInternalConstants, FormInternalState[]>().set(
          FormInternalConstants.PREVIEW,
          action?.payload
        ),
      };
    case FormsActionConstants.SetFormsPreviewData:
      return {
        ...state,
        internals: new Map<FormInternalConstants, FormInternalState[]>().set(
          FormInternalConstants.PREVIEW,
          FormsReducerMapper.toFormsFields(
            action.payload,
            state.internals?.get(
              FormInternalConstants.PREVIEW
            ) as FormInternalState[]
          )
        ),
      };
    default:
      return state;
  }
};
