import { render } from '@testing-library/react';

import Design from './design';

describe('Design', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Design />);
    expect(baseElement).toBeTruthy();
  });
});
