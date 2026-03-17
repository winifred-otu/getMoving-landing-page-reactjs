import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RentalContextProvider from './Context/RentalContext.jsx'
import ScrollTop from './components/ScrollTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollTop />
      <RentalContextProvider>
        <App />
      </RentalContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
