import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import getFireStoreApp from './Firebase/config'
import './index.css'

getFireStoreApp()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
