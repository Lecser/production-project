import { AppRouter } from 'app/providers/router';
import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useTheme } from 'shared/config/theme/useTheme';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user) {
      dispatch(userActions.setAuthData(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
