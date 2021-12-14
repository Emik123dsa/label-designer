import { render } from '@testing-library/react';

import { PreviewForm } from './preview-form.component';

describe('PreviewForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PreviewForm />);
    expect(baseElement).toBeTruthy();
  });
});
