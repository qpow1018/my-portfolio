import ReactDOM from 'react-dom/client';

import './style/fonts.css';
import './style/reset.css';
import './style/global.css';

import Home from './page/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Home />
);