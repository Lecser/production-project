import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => location.reload();
  return (
    <div className={cn(cls.pageError, {}, [className])}>
      <p>{t('Что-то пошло не так')}</p>
      <button onClick={reloadPage}>{t('Обновить страницу')}</button>
    </div>
  );
};
