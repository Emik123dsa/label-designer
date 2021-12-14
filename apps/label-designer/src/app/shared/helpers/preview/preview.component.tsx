import { Component } from 'react';

import './preview.module.scss';

/* eslint-disable-next-line */
export interface PreviewProps {}

export class Preview extends Component<PreviewProps> {
  public override render() {
    return (
      <div>
        <p>Welcome123 to Preview!</p>
      </div>
    );
  }
}

export default Preview;
