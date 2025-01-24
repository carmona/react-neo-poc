import { Button, InputNumber } from 'antd';
import React from 'react';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks.ts';
import {
  setAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../../../store/slices/counter.slice.ts';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <InputNumber
        value={count}
        onChange={(value: number | null) => dispatch(setAmount(value || 0))}
      />
      <Button onClick={() => dispatch(incrementAsync(1))}>Add Async</Button>
      <Button onClick={() => dispatch(incrementIfOdd(1))}>Add If Odd</Button>
    </div>
  );
};

export default Counter;
