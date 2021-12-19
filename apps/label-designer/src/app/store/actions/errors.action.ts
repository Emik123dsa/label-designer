import { Action } from 'redux';
import { FormInternalConstants } from '../domains/forms.state';

export enum ErrorsActionType {
  SetFormsErrors = '@@ERRORS/SET_INTERNALS_FORMS_ERRORS',
  ResetFormsErrors = '@@ERRORS/RESET_FORMS_ERRORS',
}

export interface SetFormsErrors extends Action {
  type: ErrorsActionType.SetFormsErrors;
  payload: unknown;
}

export interface ResetFormsErrors extends Action {
  type: ErrorsActionType.SetFormsErrors;
  payload: unknown;
}

// SetFormsErrors for settings forms errors.
export const setFormsErrors: (payload: unknown) => SetFormsErrors = (
  payload: unknown
): SetFormsErrors => ({
  type: ErrorsActionType.SetFormsErrors,
  payload,
});

// ResetFormsErrors for settings forms errors.
export const resetFormsErrors: (
  payload: FormInternalConstants
) => ResetFormsErrors = (payload: FormInternalConstants): ResetFormsErrors => ({
  type: ErrorsActionType.SetFormsErrors,
  payload,
});

export type ErrorsAction = SetFormsErrors | ResetFormsErrors;
