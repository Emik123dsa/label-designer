import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import {
  applyMiddleware,
  compose,
  createStore,
  Dispatch,
  Middleware,
  Store,
  StoreEnhancer,
} from 'redux';

import {
  DependencyContainer,
  DependencyContainerFactory,
} from '@core/contexts';
import type { AppAction } from '@store/actions/app.action';

import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';
import { AppState } from '@store/domains/app.state';
import { appEpic } from '@store/epics/app.epic';
import { appReducer } from '@store/reducers/app.reducer';
import { getInitialAppState } from '@store/state/app.state';
import { Container } from 'inversify';

/**
 * Store Module Factory.
 *
 * @export
 * @class StoreModuleFactory
 */
export class StoreModuleFactory {
  /**
   * History schema config.
   *
   * @private
   * @memberof StoreModuleFactory
   */
  private _history!: History;

  /**
   *  Set History Provider.
   * @param  {H} history
   * @return {void}@memberof StoreModuleFactory
   */
  public setHistory(history: History): void {
    this._history = history;
  }

  /**
   * Configure store module.
   *
   * @param  {AppState} [initialAppState=getInitialAppState()]
   * @return {void}
   * @memberof StoreModuleFactory
   */
  public configure(
    initialAppState: AppState = getInitialAppState()
  ): Store<AppState, AppAction> {
    /**
     *  Epic middleware configurator.
     */
    const epicMiddleware: EpicMiddleware<
      AppAction,
      AppAction,
      AppState,
      DependencyContainer
    > = createEpicMiddleware<
      AppAction,
      AppAction,
      AppState,
      DependencyContainer
    >({ dependencies: DependencyContainerFactory.create() as Container });

    /**
     *  Middlewares for initialized store.
     */
    const middlewares: Middleware<AppAction, AppState, Dispatch<AppAction>>[] =
      [epicMiddleware, routerMiddleware(this._history)];

    /**
     * Enhancers for initialized store.
     */
    const enhancers: StoreEnhancer<{ dispatch: unknown }, AppState>[] = [
      applyMiddleware(...middlewares),
    ];

    /**
     * Listen compose enhancers with development mode.
     */
    const composeEnhancers: typeof compose =
      process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: true,
          })
        : compose;

    /**
     * Create an instance of store object.
     */
    const store: Store<AppState, AppAction> = createStore(
      appReducer(this._history),
      initialAppState,
      composeEnhancers(...enhancers)
    );

    epicMiddleware.run(appEpic);

    return store;
  }
}
