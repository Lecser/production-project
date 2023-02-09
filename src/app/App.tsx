import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';


import {Suspense} from 'react';


import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {cn} from 'shared/lib/classNames';
import {useTheme} from 'shared/config/theme/useTheme';


export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>///Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

