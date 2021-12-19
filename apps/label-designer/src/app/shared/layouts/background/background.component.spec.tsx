import { render } from '@testing-library/react';

import { Background } from './background.component';

describe('Background', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Background.StaticLayout width={'full'} height={'full'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
