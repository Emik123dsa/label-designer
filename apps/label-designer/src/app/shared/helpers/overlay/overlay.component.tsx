import React, { Fragment } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Component } from 'react';

import './overlay.component.scss';

/* eslint-disable-next-line */
export interface OverlayProps {
  force?: boolean;
}

/**
 * Overlay Loading.
 *
 * @export
 * @class Overlay
 * @extends Component<OverlayProps>
 */
export class Overlay extends Component<OverlayProps> {
  /**
   * Logo locale path.
   *
   * @static
   * @type string
   * @memberof Overlay
   */
  public static Logo = '/assets/images/static-logo';

  public override render(): JSX.Element {
    const { force }: Readonly<OverlayProps> = this.props;
    return (
      <div>
        <div className="fixed min-w-full h-full bg-white z-10">
          <div className="absolute top-1/2 left-1/2 z-20 transform animate-pulse -translate-y-1/2 -translate-x-1/2">
            <picture>
              <source type="image/webp" srcSet={`${Overlay.Logo}.webp`} />
              <img
                alt="static-background"
                className="bg-no-repeat h-24 w-auto bg-cover bg-fixed"
                src={`${Overlay.Logo}.png`}
              />
            </picture>
          </div>
        </div>
      </div>
    );
  }
}
