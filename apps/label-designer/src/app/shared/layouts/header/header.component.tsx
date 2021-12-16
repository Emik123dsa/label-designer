import { Component } from 'react';

import './header.component.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

/**
 * Header common layout.
 *
 * @export Header of common layout.
 * @class Header of class.
 */
export class Header {
  /**
   * Default header layout.
   *
   * @static layout method.
   * @memberof Header of inherited class.
   */
  public static Layout = class extends Component<HeaderProps> {
    public override render() {
      return (
        <header role="contentinfo">
          {/* TODO: there's will be only empty layout. */}
        </header>
      );
    }
  };
}
