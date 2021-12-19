import { render } from '@testing-library/react';

import GridTile from './grid-tile.component';

describe('GridTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GridTile />);
    expect(baseElement).toBeTruthy();
  });
});
