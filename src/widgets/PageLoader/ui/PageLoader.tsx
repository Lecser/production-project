import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;
  return (
    <div className={cn(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
