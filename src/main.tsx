import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SpeedInsights } from "@vercel/speed-insights/react"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './routes/pages/SignUp.tsx'
import SignIn from './routes/pages/SignIn.tsx'
import Notfound from './routes/404/NotFound.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/sign-in" element={<SignUp/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
        </BrowserRouter>
    <SpeedInsights/>
  </React.StrictMode>,
)
