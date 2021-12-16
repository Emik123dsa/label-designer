import { Component } from 'react';

import './preview.component.scss';

/* eslint-disable-next-line */
export interface PreviewProps {}

export class Preview extends Component<PreviewProps> {
  public override render() {
    return (
      <div>
        <p>Preview card!</p>
      </div>
    );
  }
}

export default Preview;
