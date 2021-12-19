import { Component, Fragment, ReactNode } from 'react';
import { renderRoutes } from 'react-router-config';
import { Header, Footer } from '@layouts';
import { routes } from './preview/preview-routing.module';

import './app.component.scss';
import { Background } from './shared/layouts/background/background.component';
import { Overlay } from './shared/helpers';

/* eslint-disable-next-line */
export interface AppProps {}

/**
 * Application component initializer.
 *
 * @export App as app initializer.
 * @class App of class.
 * @extends Component<AppProps, unknown>
 */
export class App extends Component<AppProps, unknown> {
  /**
   * Render application context.
   *
   * @memberof App of render.
   */
  public override render(): ReactNode {
    return (
      <Fragment>
        <Header.Layout />
        <main id="main" className="main" role="main">
          {renderRoutes(routes)}
        </main>
        <Footer.Layout />
        <Background.StaticLayout width="full" height="full" />
      </Fragment>
    );
  }
}
