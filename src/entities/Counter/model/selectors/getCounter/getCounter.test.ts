import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { DeepPartial } from 'redux';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 11 } };
    expect(getCounter(state as StateSchema)).toEqual({ value: 11 });
  });
});
