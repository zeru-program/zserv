import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CtaWa from './components/CtaWa.tsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "../scss/custom.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <CtaWa />
  </React.StrictMode>,
)
