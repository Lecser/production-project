import { cn } from 'shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;
  return (
    <div className={cn(cls.loader, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
