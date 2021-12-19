import { AppState } from '@store/domains/app.state';
import {
  FormInternalState,
  FormInternalConstants,
  FormsState,
  FormsStateMap,
} from '@store/domains/forms.state';
import { createSelector, OutputSelector } from 'reselect';

// FormsState provider.
export const getForms: (state: AppState) => FormsState = (
  state: AppState
): FormsState => state.forms;

export const getFormsInternals: OutputSelector<
  AppState,
  FormsStateMap,
  (state: FormsState) => FormsStateMap
> = createSelector(
  getForms,
  (state: FormsState): FormsStateMap => state.internals as FormsStateMap
);

export const getFormsPreview: OutputSelector<
  AppState,
  FormInternalState[] | null,
  (state: FormsStateMap) => FormInternalState[] | null
> = createSelector(
  getFormsInternals,
  (state: FormsStateMap): FormInternalState[] | null =>
    state?.get(FormInternalConstants.PREVIEW) || null
);
