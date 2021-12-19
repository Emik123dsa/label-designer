import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router';
import { LazyExoticComponent } from '@/app-routing.module';
import { Overlay } from '@helpers';
import { RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import { PreviewProps } from '@/preview/preview.component';

// eslint-disable-next-line @typescript-eslint/ban-types
const Preview: LazyExoticComponent<PreviewProps> = React.lazy(
  (): Promise<{ default: React.ComponentType<PreviewProps> }> =>
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
    component: Preview as LazyExoticComponent<Partial<PreviewProps>>,
  },
  {
    exact: false,
    name: Redirect.name,
    key: Redirect.name,
    path: '*',
    render: () => <Redirect from="*" to="/preview" />,
  },
];
