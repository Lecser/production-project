import { ProfileCard, profileReducer } from 'entities/Profile';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const { className } = props;
  const { t } = useTranslation();
  return (
    <div>
      <ProfileCard />
    </div>
  );
};
export default ProfilePage;
