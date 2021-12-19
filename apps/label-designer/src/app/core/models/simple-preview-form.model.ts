/**
 * Simple Preview Form Model.
 *
 * @export SimplePreviewForm as interface.
 * @interface SimplePreviewForm as model.
 */
export interface SimplePreviewForm {
  type: string;
  description: string;
  countryCode: string;
  productCode: number;
}

/**
 * Implementation of simple preview form.
 *
 * @export SimplePreviewFormImpl as form impl.
 * @class SimplePreviewFormImpl as string class.
 * @implements SimplePreviewForm as interface implementation.
 */
export class SimplePreviewFormImpl implements SimplePreviewForm {
  public constructor(
    public type: string,
    public description: string,
    public countryCode: string,
    public productCode: number
  ) {}
}
