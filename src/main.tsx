import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { SoundProvider } from './context/SoundContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AccessibilityProvider>
      <SoundProvider>
        <App />
      </SoundProvider>
    </AccessibilityProvider>
  </React.StrictMode>
);
