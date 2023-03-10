import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { t } = useTranslation();
  const { className } = props;
  return <div className={cn(cls.notFoundPage, {}, [className])}>{t('Страница не найдена')}</div>;
};
