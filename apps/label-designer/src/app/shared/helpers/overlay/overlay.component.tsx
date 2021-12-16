import { Component } from 'react';

import './overlay.component.scss';

/* eslint-disable-next-line */
export interface OverlayProps {
  force?: boolean;
}

export class Overlay extends Component<OverlayProps> {
  render() {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }
}
