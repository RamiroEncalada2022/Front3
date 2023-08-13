import React from 'react'

const Producto = ({producto}) => {
  return (
  
        <li>
          <h2>{producto.nome}</h2>
          <img src={producto.image} />
          <h3>{producto.preco}</h3>
        </li>
  )
}

export default Producto