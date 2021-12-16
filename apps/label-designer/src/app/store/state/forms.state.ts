import { FormInternalState, FormsState } from '../domains/forms.state';

const internalsForms: FormInternalState[] = [
  {
    label: 'Part type',
    code: 'type',
    selectable: true,
    defaultValue: { label: 'Engine part', code: 'EP' },
    options: [{ label: 'Engine part', code: 'EP' }],
  },
  {
    label: 'Product code',
    code: 'productCode',
    selectable: false,
    defaultValue: 1234567890,
  },
  {
    label: 'Country of origin',
    selectable: true,
    code: 'countryCode',
    defaultValue: { label: 'France', code: 'FR' },
    options: [{ label: 'France', code: 'FR' }],
  },
  {
    label: 'Part description',
    code: 'description',
    selectable: false,
    defaultValue: 'Spark plug',
  },
];

const maps = new Map<string, FormInternalState>();

internalsForms.forEach((internalForm) =>
  maps.set(internalForm.code, internalForm)
);

export const initialFormsState: FormsState = {
  internals: maps,
};
