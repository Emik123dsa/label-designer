import { AnyAction } from 'redux';
import { ErrorsAction } from './errors.action';
import { FormsAction } from './forms.action';
import { UtilsAction } from './utils.action';

export type AppAction = FormsAction | ErrorsAction | UtilsAction | AnyAction;
