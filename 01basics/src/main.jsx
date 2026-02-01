import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'



const anotherElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'CLick to visit google'
)

createRoot(document.getElementById('root')).render(
  anotherElement
  
)
