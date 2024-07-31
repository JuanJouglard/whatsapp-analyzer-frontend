import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios'

console.log("ENV ENDPOINT: ", import.meta.env.SERVER_ENDPOINT)
axios.create({
    baseURL: "localhost:8000"
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
