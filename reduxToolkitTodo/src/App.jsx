import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'

function App() {
  
  return (
    <>
      <div>Todos</div>
      <AddTodos/>
      <Todos/>
    </>
  )
}

export default App
