import { AnyAction } from 'redux';
import { combineEpics, Epic, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { AppState } from '@store/domains/app.state';
import { formsEpic } from '@store/epics/forms.epic';
import { AppAction } from '@store/actions/app.action';
import { DependencyContainer } from '@core/contexts';

export const appEpic: Epic<
  AppAction,
  AppAction,
  AppState,
  DependencyContainer
> = combineEpics(formsEpic);
