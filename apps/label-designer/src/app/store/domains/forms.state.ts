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
 * Form Internal State.
 *
 * @export
 * @interface FormInternalState
 */
export interface FormInternalState {
  label: string;
  code: string;
  selectable: boolean;
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
  internals: Map<string, FormInternalState>;
}
