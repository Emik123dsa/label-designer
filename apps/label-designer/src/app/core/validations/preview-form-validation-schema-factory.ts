import * as yup from 'yup';

import type { TypedSchema } from 'yup/lib/util/types';

import type { SimplePreviewForm } from '@models';

// @internal Preview Form Schema.
interface PreviewFormSchema extends TypedSchema, SimplePreviewForm {}

/**
 * Preview Form Validation Schema.
 */
export type PreviewFormValidationSchema = yup.InferType<PreviewFormSchema>;

/**
 * Preview Form Schema Factory.
 *
 * @export PreviewFormValidationSchemaFactory as factory.
 * @class PreviewFormValidationSchemaFactory as string.
 */
export class PreviewFormValidationSchemaFactory {
  /**
   * Get instance of yup.FormSchema for handling validations errors.
   *
   * @static create method.
   * @return yup.AnyObjectSchema
   * @memberof PreviewFormValidationSchemaFactory
   */
  public static create(): yup.AnyObjectSchema {
    // @internal schemas.
    return yup.object({
      type: yup.string().required('Type of part is required'),
      description: yup.string().notRequired(),
      countryCode: yup.string().required('Code of country is required'),
      productCode: yup.string().required('Code of product is required'),
    });
  }
}
