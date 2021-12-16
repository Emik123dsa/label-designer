import { ErrorsState } from './errors.state';
import { FormsState } from './forms.state';
import { UtilsState } from './utils.state';

export interface AppState {
  forms: FormsState;
  utils: UtilsState;
  errors: ErrorsState;
}
