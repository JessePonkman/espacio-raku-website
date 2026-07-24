import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render(pathname = '/') {
  return renderToString(
    <React.StrictMode>
      <App initialPath={pathname} />
    </React.StrictMode>,
  );
}
