import { RouterState } from 'connected-react-router';
import { ErrorsState } from './errors.state';
import { FormsState } from './forms.state';
import { UtilsState } from './utils.state';

/**
 *  App State.
 * @export
 * @interface AppState
 */
export interface AppState {
  forms: FormsState;
  utils: UtilsState;
  errors: ErrorsState;
}

/**
 * App Router State.
 */
export type AppRouterState<T = unknown> = AppState & { router: RouterState<T> };
