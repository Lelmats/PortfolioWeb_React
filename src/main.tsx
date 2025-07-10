import React from 'react'
import { Suspense } from "react";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={'Loading...'}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
)
