import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppStateProvider } from './context/AppStateContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
    }}>
      <AppStateProvider>
    <App />
      </AppStateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
