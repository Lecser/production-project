import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './Counter';

describe('counterTest', () => {
  beforeEach(() =>
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 11 }
      }
    })
  );
  test('render counter value', () => {
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('counter increment', async () => {
    const clickInc = screen.getByTestId('increment-btn');
    await userEvent.click(clickInc);
    expect(screen.getByTestId('value-title')).toHaveTextContent('12');
  });
  test('counter decrement', async () => {
    const clickInc = screen.getByTestId('decrement-btn');
    await userEvent.click(clickInc);
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
});
