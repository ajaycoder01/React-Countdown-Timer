import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownTimer from './component/CountdownTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountdownTimer/>
    </>
  )
}

export default App
