import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './Routing'
import { SpeedInsights } from '@vercel/speed-insights/next';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routing/>
    <SpeedInsights/>
  </React.StrictMode>,
)
