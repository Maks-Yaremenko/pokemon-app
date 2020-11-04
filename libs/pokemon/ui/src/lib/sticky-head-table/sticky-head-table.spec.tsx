import React from 'react';
import { render } from '@testing-library/react';

import { StickyHeadTable } from './sticky-head-table';

describe('StickyHeadTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StickyHeadTable />);
    expect(baseElement).toBeTruthy();
  });
});
