import { FormInternalState } from '@store/domains/forms.state';

/**
 * Forms Util Helper.
 *
 * @export
 * @class FormsUtil
 */
export class FormsUtil {
  /**
   * Creates an instance of FormsUtil.
   *
   * @param  {FormInternalState[]} _formsPreview
   * @memberof FormsUtil
   */
  public constructor(private _formsPreview: FormInternalState[]) {}

  /**
   * Get Forms Preview By Field Code.
   * @static
   * @memberof FormsUtil
   */
  public getFormsPreviewFieldByCode: (
    code: string
  ) => FormInternalState | null = (code: string) =>
    this._formsPreview?.find?.((formField: FormInternalState) =>
      code.includes?.(formField?.code)
    ) || null;
}
