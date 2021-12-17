import { Component } from 'react';
import tw from 'twin.macro';
import { PreviewForm } from '@/preview/preview-form/preview-form.component';

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
  public override render(): JSX.Element {
    return (
      <section role="contentinfo">
        <div className="container block">
          <div className="max-w-full relative">
            <PreviewForm />
          </div>
        </div>
      </section>
    );
  }
}
