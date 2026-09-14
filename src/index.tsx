import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import './style/fonts.scss';
import './style/reset.scss';
import './style/global.scss';

import Home from './page/Home';
import Career from './page/Career';

function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    function handleHashChange() {
      setRoute(window.location.hash);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === '#/career') return <Career />;

  return <Home />;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
