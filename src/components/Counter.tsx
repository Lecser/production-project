import {useState} from 'react';
import cls from './Counter.module.scss'


export const Counter = () => {
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className={cls.wrapper}>
      <div>{count}</div>
      <button className={cls.btn} onClick={inc}>inc</button>
    </div>
  );
};

