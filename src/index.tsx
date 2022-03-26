import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { TryWordProvider } from './context/TryWordProvider';

ReactDOM.render(
  <React.StrictMode>
    <TryWordProvider>
      <App />
    </TryWordProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
