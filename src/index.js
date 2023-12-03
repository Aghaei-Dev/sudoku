import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './context'
import App from './App'

import './global/index.css'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
)

serviceWorkerRegistration.register()
