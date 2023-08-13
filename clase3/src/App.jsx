import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './Components/Saludo'

function App() {
  const [count, setCount] = useState(0)


  const name = "Pepe"

  return (
    <>
    <Saludo nombre={name}/>


    </>


  )
}

export default App
