import { Component } from 'react';

import './footer.component.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

/**
 * Footer common layout.
 *
 * @export Footer of commot layout.
 * @class Footer of string.
 */
export class Footer {
  /**
   * Layout default component.
   *
   * @static
   * @memberof Footer
   */
  public static Layout = class extends Component<FooterProps> {
    public override render(): JSX.Element {
      return (
        <footer role="contentinfo">
          {/* TODO: there's will be only empty layout. */}
        </footer>
      );
    }
  };
}
