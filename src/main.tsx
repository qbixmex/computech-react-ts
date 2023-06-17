import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { darkTheme } from './themes';
import { store } from './store';
import App from './App.tsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
