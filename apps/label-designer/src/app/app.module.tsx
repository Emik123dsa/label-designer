import { StrictMode } from 'react';
import { render } from 'react-dom';
import { compose } from 'redux';

import { App } from '@/app.component';

/**
 *  App Factory.
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
        <App />
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
    webkitAudioContext: AudioContext;
  }
}
