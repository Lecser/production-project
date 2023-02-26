import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  return <div className={cn(cls.notFoundPage, {}, [className])}>{t('Страница не найдена')}</div>;
};
