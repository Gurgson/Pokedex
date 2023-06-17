import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import LandingOption from './LandingOption';

describe('LandingOption', () => {
  it('renders the description and children', () => {
    const wrapper = {
      bgColor: 'blue',
    };
    const description = 'Sample Description';
    const to = '/sample-link';
    const children = <div>Sample Children</div>;

    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <LandingOption wrapper={wrapper} description={description} to={to}>
          {children}
        </LandingOption>
      </BrowserRouter>
    );

    const descriptionElement = getByText(description);
    const childrenElement = getByTestId('landing-option-children');

    expect(descriptionElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement).toContainHTML('<div>Sample Children</div>');
  });

  
});