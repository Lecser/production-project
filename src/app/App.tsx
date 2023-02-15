import './styles/index.scss'
import {cn} from 'shared/lib/classNames';
import {useTheme} from 'shared/config/theme/useTheme';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';


export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

