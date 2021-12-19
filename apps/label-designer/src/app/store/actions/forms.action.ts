import { InputSyntheticEvent } from '@scribos/design';
import { FormInternalState } from '@store/domains/forms.state';
import { Action } from 'redux';

/**
 * Forms Action Constants.
 *
 * @export
 * @enum {number}
 */
export enum FormsActionConstants {
  SetFormsPreviewData = '@@forms/FORMS_PREVIEW_DATA_SET',
  InitFormsPreview = '@@forms/FORMS_INTERNALS_PREVIEW_INIT',
  InitFormsPreviewSuccess = '@@forms/FORMS_INTERNALS_PREVIEW_SUCCESS_INIT',
}

/**
 * Init Preview Forms.
 *
 * @export
 * @interface InitPreviewForms
 * @extends Action
 */
export interface InitFormsPreview extends Action {
  type: FormsActionConstants.InitFormsPreview;
}

/**
 * Init Preview Forms Success.
 *
 * @export
 * @interface InitPreviewForms
 * @extends Action
 */
export interface InitFormsPreviewSuccess extends Action {
  type: FormsActionConstants.InitFormsPreviewSuccess;
  payload: FormInternalState[];
}

/**
 * Set Forms Preview Data Action.
 *
 * @export
 * @interface SetFormsPreviewData
 * @extends Action
 */
export interface SetFormsPreviewData extends Action {
  type: FormsActionConstants.SetFormsPreviewData;
  payload: InputSyntheticEvent;
}

/**
 * Init Forms Preview.
 *
 * @returns an action of InitFormsPreview.
 */
export const initFormsPreview: () => InitFormsPreview =
  (): InitFormsPreview => {
    return {
      type: FormsActionConstants.InitFormsPreview,
    };
  };

/**
 * Init Forms Preview Success.
 *
 * @param payload
 * @returns an action of InitFormsPreviewSuccess.
 */
export const initFormsPreviewSuccess: (
  payload: FormInternalState[]
) => InitFormsPreviewSuccess = (
  payload: FormInternalState[]
): InitFormsPreviewSuccess => ({
  type: FormsActionConstants.InitFormsPreviewSuccess,
  payload,
});

/**
 * Set Forms Preview Datas.
 * @param payload
 * @returns an action of SetFormsPreviewData.
 */
export const setFormsPreviewData: (
  payload: InputSyntheticEvent
) => SetFormsPreviewData = (
  payload: InputSyntheticEvent
): SetFormsPreviewData => ({
  type: FormsActionConstants.SetFormsPreviewData,
  payload,
});

/**
 * Create all forms actions.
 */
export type FormsAction =
  | InitFormsPreview
  | InitFormsPreviewSuccess
  | SetFormsPreviewData;
