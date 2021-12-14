import { Component } from 'react';

import './preview.module.scss';

/* eslint-disable-next-line */
export interface PreviewProps {}

export class Preview extends Component<PreviewProps> {
  render() {
    return (
      <div>
        <p>Welcome to Preview!</p>
      </div>
    );
  }
}

export default Preview;
