import { render } from '@testing-library/react';

import { Footer } from './footer.component';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer.Layout />);
    expect(baseElement).toBeTruthy();
  });
});
