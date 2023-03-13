import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, type = 'text', ...restProps } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.currentTarget.value);

  return (
    <input
      className={cn(cls.input, {}, [className])}
      type={type}
      onChange={onChangeHandler}
      value={value}
      {...restProps}
    />
  );
});
