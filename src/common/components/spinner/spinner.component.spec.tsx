import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from 'react-promise-tracker';

vi.mock('react-promise-tracker');

describe('SpinnerComponent', () => {
  it('should render spinner correctly when have a promise in progress', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);
    const spinner = screen.getByRole('presentation');

    // Assert
    expect(spinner).toBeInTheDocument();
  });

  it('should not render spinner when no promise is in progress', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({ promiseInProgress: false });

    // Act
    render(<SpinnerComponent />);
    const spinner = screen.queryByRole('presentation');

    // Assert
    expect(spinner).not.toBeInTheDocument();
  });

  it('should call usePromiseTracker hook when render spinner', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(usePromiseTracker).toHaveBeenCalled();
  });
});