/* eslint-disable @typescript-eslint/ban-types */
import React, { Component, Suspense } from 'react';
import { ReactiveConnect } from 'reactive-connect';

import { AppState } from '@store/domains/app.state';
import { FormInternalState } from '@store/domains/forms.state';
import {
  initFormsPreview,
  InitFormsPreview,
} from '@store/actions/forms.action';
import { getFormsPreview } from '@store/selectors/forms.selector';
import { LazyExoticComponent } from '@/app-routing.module';
import { Overlay } from '../shared/helpers';
import { PreviewFormProps } from '@/preview/preview-form/preview-form.component';
import { ThemeContext } from '@core/contexts';
import { ArrayUtil } from '../core/utils/array.util';

type PreviewStateProps = {
  formsPreview: FormInternalState[] | null;
};

type PreviewDispatchProps = {
  initFormsPreview: () => InitFormsPreview;
};

/* eslint-disable-next-line */
export type PreviewProps = PreviewStateProps & PreviewDispatchProps;

// eslint-disable-next-line @typescript-eslint/ban-types
const PreviewForm: LazyExoticComponent<PreviewFormProps> = React.lazy(
  (): Promise<{ default: React.ComponentType<PreviewFormProps> }> =>
    import('@/preview/preview-form/preview-form.component').then(
      ({ PreviewForm }) => ({
        default: PreviewForm,
      })
    )
);

/**
 * Preview Page Component.
 *
 * @export Preview as component.
 * @class Preview of string class.
 * @extends Component<PreviewProps>
 */
@ReactiveConnect(
  (state: AppState): PreviewStateProps => ({
    formsPreview: getFormsPreview(state),
  }),
  {
    initFormsPreview,
  } as PreviewDispatchProps
)
export class Preview extends Component<PreviewProps> {
  /**
   * Init forms preview.
   *
   * @memberof Preview
   */
  public override componentDidMount(): void {
    const { formsPreview }: Readonly<PreviewStateProps> = this.props;
    if (!formsPreview && !Array.isArray(formsPreview))
      this.props.initFormsPreview();
  }

  /**
   * Render preview page.
   *
   * @memberof Preview
   */
  public override render(): JSX.Element {
    const { formsPreview }: Readonly<PreviewStateProps> = this.props;
    return (
      <section role="contentinfo">
        <div className="container block">
          <div className="max-w-full relative">
            {formsPreview && !ArrayUtil.isEmpty(formsPreview) ? (
              <Suspense fallback={null}>
                <PreviewForm formsPreview={formsPreview} />
              </Suspense>
            ) : null}
          </div>
        </div>
      </section>
    );
  }
}
