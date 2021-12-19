/**
 * Form Multi Option State.
 *
 * @export
 * @typedef FormOptionState
 */
export type FormMultiOption = Pick<FormInternalState, 'label' | 'code'>;

/**
 * Form Simple Option State.
 *
 * @export
 * @typedef FormOptionState
 */
export type FormSimpleOption = string | number | symbol;

/**
 * Form Internal Constants.
 *
 * @export
 * @typedef FormInternalConstants
 */
export enum FormInternalConstants {
  PREVIEW = 'preview',
}

/**
 * Form Internal State.
 *
 * @export
 * @interface FormInternalState
 */
export interface FormInternalState {
  label: string;
  code: string;
  selectable: boolean;
  value?: FormMultiOption | FormSimpleOption;
  defaultValue: FormMultiOption | FormSimpleOption;
  options?: FormMultiOption[];
}

/**
 * Forms State.
 *
 * @export
 * @interface FormsState
 */
export interface FormsState {
  internals: Map<FormInternalConstants, FormInternalState[]> | null;
}

/**
 * Forms State Map Helper.
 */
export type FormsStateMap = Map<FormInternalConstants, FormInternalState[]>;
