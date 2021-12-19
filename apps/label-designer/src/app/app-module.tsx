import React, { Fragment, StrictMode, Component } from 'react';
import { render } from 'react-dom';

import { AnyAction, compose, Store } from 'redux';
import { staticRoutes } from './app-routing.module';
import { StoreModuleFactory } from '@store/store-module';
import { createBrowserHistory, History } from 'history';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppState } from './store/domains/app.state';
import { ThemeContext } from '@emotion/react';
import {
  DependencyContainerContext,
  DependencyContainerFactory,
  ThemeContextConstants,
  ThemeContextTypeFactory,
} from './core/contexts';
import { IconContext } from 'react-icons';
import { IconContextFactory } from './core/contexts/icon.context';

/**
 * App Module.
 *
 * @export
 * @class AppModule
 * @extends Component<unknown, unknown>
 */
export class AppModule extends Component<unknown, unknown> {
  /**
   * History Browser Provider.
   *
   * @private
   * @type BrowserHistory
   * @memberof AppModule
   */
  private readonly _history: History = createBrowserHistory();

  /**
   * Initialize App Module.
   *
   * @returns an instance of elements refs.
   */
  public override render(): JSX.Element {
    const factory: StoreModuleFactory = new StoreModuleFactory();
    factory.setHistory(this._history);
    const store: Store<AppState, AnyAction> = factory.configure();
    return (
      <ThemeContext.Provider value={ThemeContextTypeFactory.create()}>
        <IconContext.Provider value={IconContextFactory.create()}>
          <DependencyContainerContext.Provider
            value={DependencyContainerFactory.create()}
          >
            <Provider key={AppModule.name} store={store}>
              <ConnectedRouter
                history={this._history}
                children={staticRoutes}
              />
            </Provider>
          </DependencyContainerContext.Provider>
        </IconContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

/**
 * App Factory.
 *
 * @export AppFactory as an application factory.
 * @class AppFactory of class.
 */
export class AppFactory {
  private static readonly elementRoot: Readonly<string> = 'root';

  /**
   * Create app instance of factory.
   *
   * @static method to create.
   * @return an render fn();
   * @memberof AppFactory
   */
  public static create(): void {
    const elementRef: HTMLElement | null = document.getElementById(
      AppFactory.elementRoot
    );

    // @internal render element roots.
    return render(
      <StrictMode>
        <AppModule />
      </StrictMode>,
      elementRef
    );
  }
}

/**
 * Bootstrap application.
 *
 * @returns an bootstrap instance for factory.
 */
export const bootstrap: () => Promise<void> = (): Promise<void> => {
  const appFactory = AppFactory.create();

  return new Promise(
    (
      resolve: (value: void | PromiseLike<void>) => void,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      reject: (reason?: Error) => void
    ) => resolve(appFactory)
  );
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: ({
      shouldHotReload,
    }: {
      shouldHotReload: boolean;
    }) => typeof compose;
  }
}
