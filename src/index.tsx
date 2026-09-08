import ReactDOM from 'react-dom/client';

import './style/fonts.scss';
import './style/reset.scss';
import './style/global.scss';

import Home from './page/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Home />
);
