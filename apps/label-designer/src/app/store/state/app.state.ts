import { AppState } from '@store/domains/app.state';
import { initialErrorsState } from '@store/state/errors.state';
import { initialFormsState } from '@store/state/forms.state';
import { initialUtilsState } from '@store/state/utils.state';

// AppState provider.
export const initialAppState: AppState = {
  forms: initialFormsState,
  utils: initialUtilsState,
  errors: initialErrorsState,
};

// AppState getter provider.
export const getInitialAppState: () => AppState = (): AppState => {
  return initialAppState;
};
