import { render } from '@testing-library/react';

import Overlay from './overlay.component';

describe('Overlay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Overlay />);
    expect(baseElement).toBeTruthy();
  });
});
