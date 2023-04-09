import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import {
  ReducersList,
  useDynamicModuleLoader
} from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = (props: ProfilePageProps) => {
  useDynamicModuleLoader(reducers, true);
  const { className } = props;
  const { t } = useTranslation();
  return <div>{t('ProfilePage')}</div>;
};
export default ProfilePage;
