import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { DeepPartial } from 'redux';

describe('getCounterValueTest', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 11 } };
    expect(getCounterValue(state as StateSchema)).toBe(11);
  });
});
