import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Dispatch,
  Middleware,
  Store,
  StoreEnhancer,
} from 'redux';
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';

import { AppState } from './domains/app.state';
import { appReducer } from './reducers/app.reducer';
import { getInitialAppState } from './state/app.state';

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
  ): Store<AppState, AnyAction> {
    /**
     *  Epic middleware configurator.
     */
    const epicMiddleware: EpicMiddleware<AnyAction, AnyAction, void, unknown> =
      createEpicMiddleware();

    /**
     *  Middlewares for initialized store.
     */
    const middlewares: Middleware<unknown, unknown, Dispatch<AnyAction>>[] = [
      epicMiddleware,
      routerMiddleware(this._history),
    ];

    /**
     * Enhancers for initialized store.
     */
    const enhancers: StoreEnhancer<unknown, AppState>[] = [
      applyMiddleware(...middlewares),
    ];

    /**
     * Listen composer enhancers with development mode.
     */
    const composeEnhancers: typeof compose =
      process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
          })
        : compose;

    /**
     * Create an instance of store object.
     */
    const store: Store<AppState, AnyAction> = createStore(
      appReducer(this._history),
      initialAppState,
      composeEnhancers(...enhancers)
    );

    return store;
  }
}
