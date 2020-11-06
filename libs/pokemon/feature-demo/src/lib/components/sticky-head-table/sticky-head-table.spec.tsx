import React from 'react';
import { render } from '@testing-library/react';
import { StickyHeadTable } from './sticky-head-table';

describe('StickyHeadTable', () => {
  const props: any = {};

  it('should render successfully', () => {
    const { baseElement } = render(<StickyHeadTable { ...props }/>);
    expect(baseElement).toBeTruthy();
  });
});
