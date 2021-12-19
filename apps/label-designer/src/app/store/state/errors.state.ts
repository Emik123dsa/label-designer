import { ErrorsState } from '../domains/errors.state';

// ErrorsState provider.
export const initialErrorsState: ErrorsState = {
  internals: {
    formsErrors: {},
  },
};
