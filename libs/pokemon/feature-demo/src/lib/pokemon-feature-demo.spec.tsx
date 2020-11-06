import React from 'react';
import { render } from '@testing-library/react';

import PokemonFeatureDemo from './pokemon-feature-demo';

describe('PokemonFeatureDemo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonFeatureDemo />);
    expect(baseElement).toBeTruthy();
  });
});
