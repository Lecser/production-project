import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

import { fireEvent, screen } from '@testing-library/react';

describe('Sidebar', () => {
  beforeEach(() => componentRender(<Sidebar />));
  test('btn', () => {
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });
  test('test toggle', () => {
    const toggleBtn = screen.getByTestId('Sidebar-toggle');
    expect(screen.getByTestId('Sidebar-toggle')).toBeInTheDocument();
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('Sidebar')).not.toHaveClass('collapsed');
  });
});
