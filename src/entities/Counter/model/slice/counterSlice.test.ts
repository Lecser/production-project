import { CounterSchema } from '../types/counterSchema';

import { counterActions, counterReducer } from './counterSlice';

describe('counterSliceTest', () => {
  test('counter decrement', () => {
    const state: CounterSchema = { value: 11 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 10 });
  });

  test('counter increment', () => {
    const state: CounterSchema = { value: 11 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 12 });
  });

  test('with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
