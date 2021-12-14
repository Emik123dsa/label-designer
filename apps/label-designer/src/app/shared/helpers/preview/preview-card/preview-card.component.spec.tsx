import { render } from '@testing-library/react';

import PreviewCard from './preview-card.component';

describe('PreviewCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PreviewCard />);
    expect(baseElement).toBeTruthy();
  });
});
