import { createSelector, OutputSelector } from 'reselect';

import { AppRouterState } from '@store/domains/app.state';
import { RouterLocation, RouterState } from 'connected-react-router';

export const getRouter = (state: AppRouterState<unknown>) => state.router;

export const getRouterLocation: OutputSelector<
  AppRouterState<unknown>,
  RouterLocation<unknown>,
  (state: RouterState<unknown>) => RouterLocation<unknown>
> = createSelector(
  getRouter,
  (state: RouterState<unknown>): RouterLocation<unknown> => state.location
);
