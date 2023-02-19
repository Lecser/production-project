import './styles/index.scss'
import {cn} from 'shared/lib/classNames';
import {useTheme} from 'shared/config/theme/useTheme';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';


export const App = () => {
  const {theme} = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar/>
      <div className={'content-page'}>
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  );
};

