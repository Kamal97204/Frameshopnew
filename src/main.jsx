import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import NAVBAR from './components/layouts/NAVBAR.jsx'
import FOOTER from './components/layouts/FOOTER.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NAVBAR/>
    <App/>
    <FOOTER/>
  </StrictMode>,
)
