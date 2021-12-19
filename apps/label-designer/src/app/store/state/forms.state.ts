import {
  FormInternalState,
  FormMultiOption,
  FormsState,
} from '@store/domains/forms.state';

// FormInternalState initial forms state.
const internalsForms: (options: FormMultiOption[]) => FormInternalState[] = (
  options: FormMultiOption[]
) => [
  {
    label: 'Part type',
    code: 'type',
    selectable: true,
    defaultValue: { label: 'Engine part', code: 'EP' },
    options: [
      { label: 'Engine part', code: 'EP' },
      { label: 'Triebwerk', code: 'EP' },
      { label: 'Vergaser', code: 'VE' },
      { label: 'Kupplung', code: 'KU' },
      { label: 'Turbostrahl', code: 'TST' },
      {
        label: 'Brennkammer',
        code: 'BK',
      },
    ],
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
    options,
  },
  {
    label: 'Part description',
    code: 'description',
    selectable: false,
    defaultValue: 'Spark plug',
  },
];

/**
 * Initial Forms State Factory.
 *
 * @returns an instance of all forms.
 */
export const initialFormsStateFactory: (
  options: ReadonlyArray<FormMultiOption>
) => FormInternalState[] = (
  options: ReadonlyArray<FormMultiOption>
): FormInternalState[] => {
  return internalsForms(options as FormMultiOption[]);
};

// FormsState initial state.
export const initialFormsState: FormsState = {
  internals: null,
};
