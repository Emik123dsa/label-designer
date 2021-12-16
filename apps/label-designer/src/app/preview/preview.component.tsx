import { Component } from 'react';

import { PreviewForm } from '@/preview/preview-form/preview-form.component';

// import './preview.module.scss';

/* eslint-disable-next-line */
export interface PreviewProps {}

/**
 * Preview Page Component.
 *
 * @export Preview as component.
 * @class Preview of string class.
 * @extends Component<PreviewProps>
 */
export class Preview extends Component<PreviewProps> {
  /**
   * Render preview page.
   *
   * @memberof Preview
   */
  public override render() {
    return (
      <section role="contentinfo">
        <div className="container">
          <div className="max-w-full">
            <PreviewForm />
          </div>
        </div>
      </section>
    );
  }
}
