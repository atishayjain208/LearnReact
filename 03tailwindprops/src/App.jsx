import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <h1 className='bg-green-400 text-black rounded-xl'>TailWind Test</h1>
      <Card username="Atishay" />
      <Card username="Yameesh" />
    </div>
  )
}

export default App
