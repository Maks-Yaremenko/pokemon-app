import React from 'react';
import { render } from '@testing-library/react';

import DialogPokemonInfo from './dialog-pokemon-info';

describe('DialogPokemonInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DialogPokemonInfo />);
    expect(baseElement).toBeTruthy();
  });
});
