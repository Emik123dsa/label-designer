import { Component } from 'react';

import './overlay.module.scss';

/* eslint-disable-next-line */
export interface OverlayProps {}

export class Overlay extends Component<OverlayProps> {
  render() {
    return (
      <div>
        <p>Welcome to Overlay!</p>
      </div>
    );
  }
}

export default Overlay;
