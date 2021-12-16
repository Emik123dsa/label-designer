import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router';
import { LazyExoticComponent } from '@/app-routing.module';
import { Overlay } from '@helpers';
import { RouteConfig } from 'react-router-config';

// eslint-disable-next-line @typescript-eslint/ban-types
const Preview: LazyExoticComponent<{}> = React.lazy(
  (): Promise<{ default: React.ComponentType }> =>
    import('@/preview/preview.component').then(({ Preview }) => ({
      default: Preview,
    }))
);

/**
 * Provide prview routins modules.
 */
export const routes: RouteConfig[] = [
  {
    exact: true,
    name: Preview.name,
    key: Preview.name,
    path: '/preview',
    component: Preview,
  },
  {
    exact: false,
    name: Redirect.name,
    key: Redirect.name,
    path: '*',
    render: () => <Redirect from="*" to="/preview" />,
  },
];
