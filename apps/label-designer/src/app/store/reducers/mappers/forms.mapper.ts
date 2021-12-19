import { InputSyntheticEvent } from '@scribos/design';
import { FormInternalState } from '@store/domains/forms.state';

/**
 * Form Reducer Mapper.
 *
 * @export FormsReducerMapper instance of reducer mapper.
 * @class FormsReducerMapper
 */
export class FormsReducerMapper {
  /**
   * Convert forms reducer events to DTO.
   *
   * @static
   * @param  {InputSyntheticEvent} event
   * @param  {FormInternalState[]} formsFields
   * @return
   * @memberof FormsReducerMapper
   */
  static toFormsFields(
    event: InputSyntheticEvent,
    formsFields: FormInternalState[]
  ) {
    return [
      // eslint-disable-next-line no-unsafe-optional-chaining
      ...formsFields.map?.((field) => ({
        ...field,
        value: field.code.includes?.(event?.code as string)
          ? (event.value as string)
          : field.value,
      })),
    ];
  }
}
