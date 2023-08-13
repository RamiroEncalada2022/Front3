import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from './Components/Producto'

const produtos = [
  {
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
];


function App() {
  const [count, setCount] = useState(0);

  return (
    <>

    <h1>Productos</h1>

    <ul> 
      
      
      {produtos.map((producto, indice)=> <Producto key = {indice} producto = {producto} />) } 
    
    
    </ul>

    </>


  )
    
    

      

  
}

export default App
