import { Action } from 'redux';

export enum ErrorsActionType {
  SetInternalsFormsErrors = '@@ERRORS/SET_INTERNALS_FORMS_ERRORS',
  ResetInternalsFormsErrors = '@@ERRORS/RESET_INTERNALS_FORMS_ERRORS',
}

export interface SetInternalsFormsErrors extends Action {
  type: ErrorsActionType.SetInternalsFormsErrors;
  payload: unknown;
}

export interface ResetInternalsFormsErrors extends Action {
  type: ErrorsActionType.SetInternalsFormsErrors;
  payload: unknown;
}

export const setInternalsFormsErrors: (
  payload: unknown
) => SetInternalsFormsErrors = (payload: unknown): SetInternalsFormsErrors => ({
  type: ErrorsActionType.SetInternalsFormsErrors,
  payload,
});

export const resetInternalsFormsErrors: (
  payload: unknown
) => SetInternalsFormsErrors = (payload: unknown): SetInternalsFormsErrors => ({
  type: ErrorsActionType.SetInternalsFormsErrors,
  payload,
});

export type ErrorsAction = SetInternalsFormsErrors | ResetInternalsFormsErrors;
