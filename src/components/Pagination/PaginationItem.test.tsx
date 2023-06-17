import '@testing-library/jest-dom/extend-expect';
import PaginationItem from './PaginationItem';
import { render, fireEvent } from '@testing-library/react';
test('renders pagination item correctly', () => {
    // Mock handleClick function
    const handleClickMock = jest.fn();
  
    // Define props
    const props = {
      handleClick: handleClickMock,
      limit: 10,
      alias: 'Page 10',
    };
  
    // Render the component
    const { getByText } = render(<PaginationItem {...props} />);
  
    // Assert that the component renders the correct text
    expect(getByText('Page 10')).toBeInTheDocument();
  
    // Simulate a click event on the component
    fireEvent.click(getByText('Page 10'));
  
    // Assert that the handleClick function was called with the correct argument
    expect(handleClickMock).toHaveBeenCalledWith(10);
  });
  