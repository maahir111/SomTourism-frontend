import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Scroll from './Components/Scroll'

import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(

<BrowserRouter>
    <App />
</BrowserRouter>

)
