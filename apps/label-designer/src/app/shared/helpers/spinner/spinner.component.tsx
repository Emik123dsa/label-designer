import { Component } from 'react';

import './spinner.module.scss';

/* eslint-disable-next-line */
export interface SpinnerProps {}

export class Spinner extends Component<SpinnerProps> {
  render() {
    return (
      <div>
        <p>Welcome to Spinner!</p>
      </div>
    );
  }
}

export default Spinner;
