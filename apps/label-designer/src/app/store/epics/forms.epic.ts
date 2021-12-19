import {
  LoggerService,
  LoggerServiceConstant,
} from './../../core/services/logger-service';
import {
  initFormsPreviewSuccess,
  FormsActionConstants,
  FormsAction,
} from '@store/actions/forms.action';
import type {
  InitFormsPreview,
  InitFormsPreviewSuccess,
} from '@store/actions/forms.action';
import { debounceTime, delay, map, mapTo, Observable, tap } from 'rxjs';
import { combineEpics, Epic, ofType, StateObservable } from 'redux-observable';
import {
  FormInternalState,
  FormMultiOption,
  FormsState,
} from '@store/domains/forms.state';
import { DependencyContainer } from '@core/contexts';
import { initialFormsStateFactory } from '@store/state/forms.state';

import { AppState } from '@store/domains/app.state';
import { AppAction } from '@store/actions/app.action';
import { CountriesAdapter } from '~/app/core/adapters/countries.adapter';
import {
  ContriesData,
  NativeCountriesAdapter,
  NativeCountriesAdapterConstant,
} from '~/app/core/adapters/native-countries.adapter';
import { LocaleData } from 'i18n-iso-countries';

export type AppFormsInitFormsPreview =
  | AppAction
  | FormsAction
  | InitFormsPreview;

export type AppFormsInitFormsPreviewSuccess =
  | AppAction
  | FormsAction
  | InitFormsPreviewSuccess;

export type AppFormsState = AppState | FormsState;

export const initFormsPreviewEpic: Epic<
  AppFormsInitFormsPreview,
  AppFormsInitFormsPreviewSuccess,
  AppFormsState,
  DependencyContainer
> = (
  action$: Observable<AppAction | FormsAction | InitFormsPreview>,
  state$: StateObservable<AppState | FormsState>,
  dependencies: DependencyContainer
): Observable<AppFormsInitFormsPreviewSuccess> =>
  action$.pipe(
    ofType<
      AppFormsInitFormsPreviewSuccess,
      FormsActionConstants.InitFormsPreview
    >(FormsActionConstants.InitFormsPreview),

    mapTo(
      dependencies
        .get<NativeCountriesAdapter>(NativeCountriesAdapterConstant)
        .toArray()
    ),

    map((options: ReadonlyArray<FormMultiOption>) =>
      initialFormsStateFactory(options)
    ),

    map((payload: FormInternalState[]) => initFormsPreviewSuccess(payload))
  );

export const formsEpic: Epic<
  AppFormsInitFormsPreview,
  AppFormsInitFormsPreviewSuccess,
  AppFormsState,
  DependencyContainer
> = combineEpics(initFormsPreviewEpic);
