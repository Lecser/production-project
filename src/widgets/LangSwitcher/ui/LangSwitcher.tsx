import { cn } from "shared/lib/classNames";
import cls from "./LangSwitcher.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/ui/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={toggle}
      theme={ThemeButton.CLEAR}
      className={cn(cls.langSwitcher, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
