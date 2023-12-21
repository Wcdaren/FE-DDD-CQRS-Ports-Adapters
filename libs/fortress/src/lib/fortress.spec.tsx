import { render } from '@testing-library/react';

import Fortress from './fortress';

describe('Fortress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fortress />);
    expect(baseElement).toBeTruthy();
  });
});
