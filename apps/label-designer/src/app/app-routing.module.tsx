import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Overlay } from '@helpers';

/**
 * Lazy Exotic Component provider.
 *
 * @typedef LazyExoticComponent of component.
 */
export type LazyExoticComponent<T = unknown> = React.LazyExoticComponent<
  React.ComponentType<T>
>;

// eslint-disable-next-line @typescript-eslint/ban-types
const App: LazyExoticComponent<{}> = React.lazy(
  (): Promise<{ default: React.ComponentType }> =>
    import('@/app.component').then(({ App }) => ({
      default: App,
    }))
);

/**
 * Routes provider constants.
 * Creates an instance of lazy loaded components.
 *
 * @returns elements refs.
 */
export const staticRoutes: JSX.Element = (
  <Suspense fallback={<Overlay force={true} />}>
    <Switch>
      <Route path="/preview" component={App} />
      <Redirect from="/" to="/preview" />
    </Switch>
  </Suspense>
);
