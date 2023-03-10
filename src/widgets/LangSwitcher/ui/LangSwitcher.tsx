import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const toggle = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={cn('', {}, [className as string])}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
