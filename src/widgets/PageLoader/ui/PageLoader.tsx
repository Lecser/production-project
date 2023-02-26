import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';

import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

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
