import { useTheme } from 'app/providers/ThemeProvider';
import { Routing } from 'pages';
import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur fugiat tempora,
          voluptas ipsa quidem error nulla ducimus iusto quasi non numquam saepe repudiandae sunt
          nostrum dolor deserunt cum animi.
        </Modal>
        <button type="button" onClick={() => setIsOpen(true)}>
          toggle
        </button>
        <div className="content-page">
          <Sidebar />
          <Routing />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
