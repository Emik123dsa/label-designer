import { Component } from 'react';

import './preview-card.module.scss';

/* eslint-disable-next-line */
export interface PreviewCardProps {}

export class PreviewCard extends Component<PreviewCardProps> {
  render() {
    return (
      <div>
        <p>Welcome to PreviewCard!</p>
      </div>
    );
  }
}

export default PreviewCard;
