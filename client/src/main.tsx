import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { PrimeReactProvider } from 'primereact/api'
import './assets/theme.css'
import 'primereact/resources/primereact.min.css'
import './assets/base.scss'
import 'primeflex/primeflex.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
)
