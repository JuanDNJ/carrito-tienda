import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/index.css'

import Router from './router/index.jsx'
const app = ReactDOM.createRoot(document.getElementById('root'))
app.render(
  <Router />
)
