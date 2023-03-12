import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();

  const counterValue = useSelector(getCounterValue);

  const inc = () => {
    dispatch(counterActions.increment());
  };
  const dec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid='increment-btn' theme={ButtonTheme.OUTLINE} onClick={inc}>
        -
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid='decrement-btn' theme={ButtonTheme.OUTLINE} onClick={dec}>
        +
      </Button>
    </div>
  );
};
