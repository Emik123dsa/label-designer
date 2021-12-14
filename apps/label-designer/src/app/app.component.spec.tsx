import { render } from '@testing-library/react';

import { App } from './app.component';

describe('AppComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
