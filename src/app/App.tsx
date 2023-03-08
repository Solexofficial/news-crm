import { Routing } from 'pages';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import cls from './App.module.scss';

export const App = () => {
  return (
    <div className={classNames(cls.app, {}, [])}>
      <Navbar />
      <div className={cls['content-page']}>
        <Sidebar />
        <Routing />
      </div>
    </div>
  );
};
