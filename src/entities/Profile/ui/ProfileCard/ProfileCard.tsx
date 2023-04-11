import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const profileData = useAppSelector(getProfileData);
  const error = useAppSelector(getProfileError);
  const isLoading = useAppSelector(getProfileIsLoading);

  return (
    <div className={cn(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editBtn} theme={ButtonTheme.FILLED}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={profileData?.first} placeholder={t('Ваше имя')} className={cls.input} />
        <Input
          value={profileData?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
