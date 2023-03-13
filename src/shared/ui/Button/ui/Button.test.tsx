import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('Button test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Test button with theme clear', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
