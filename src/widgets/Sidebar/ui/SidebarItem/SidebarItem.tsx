import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { SidebarItemType } from '../../model/items/items';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  return (
    <AppLink
      theme={AppLinkTheme.SUBHEAD}
      to={item.path}
      className={cn(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.icon className={cls.icon} />
      <span className={cls.link}> {t(item.text)}</span>
    </AppLink>
  );
});
