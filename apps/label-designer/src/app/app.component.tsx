import { Component, ReactNode } from 'react';
import './app.component.scss';

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
   * Creates an instance of App.
   *
   * @param  {Readonly<AppProps>} props
   * @memberof App
   */
  public constructor(props: Readonly<AppProps>) {
    super(props);
  }

  /**
   * Render application context.
   *
   * @memberof App of render.
   */
  public override render(): ReactNode {
    return <div className="container mx-4">uptodate</div>;
  }
}
