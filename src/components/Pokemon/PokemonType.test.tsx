import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PokemonType from './PokemonType';

describe('PokemonType component', () => {
  it('renders the correct type', () => {
    const props = {
      isSmall: true,
      type: 'Fire',
    };

    const { getByText } = render(<PokemonType {...props} />);
    const typeElement = getByText('Fire');
    
    expect(typeElement).toBeInTheDocument();
  });
});