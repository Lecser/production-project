import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = (props: PageErrorProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const reloadPage = () => window.location.reload();
  return (
    <div className={cn(cls.pageError, {}, [className])}>
      <p>{t('Что-то пошло не так')}</p>
      <button onClick={reloadPage}>{t('Обновить страницу')}</button>
    </div>
  );
};
