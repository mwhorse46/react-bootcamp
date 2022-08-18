import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CounterProvider } from './context/CounterContext'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
)
