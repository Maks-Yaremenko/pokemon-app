import React from 'react';
import { render } from '@testing-library/react';

import { SmartDemoComponent } from './smart-demo-component';

describe('DemoComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmartDemoComponent />);
    expect(baseElement).toBeTruthy();
  });
});
