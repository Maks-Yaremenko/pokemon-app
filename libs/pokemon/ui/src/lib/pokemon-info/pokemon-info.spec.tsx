import React from 'react';
import { render } from '@testing-library/react';

import PokemonInfo from './pokemon-info';

describe('PokemonInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonInfo />);
    expect(baseElement).toBeTruthy();
  });
});
