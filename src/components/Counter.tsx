import {useState} from 'react';
import './counterStyles.scss'

export const Counter = () => {
  const [counst, setCount] = useState(0)

  const inc = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      {counst}
      <button className={'aaaaa'} onClick={inc}>inc</button>
    </div>
  );
};

