import React, { useEffect, useState } from 'react'

const Pokemons = () => {

    const [pokemones, setPokemones] = useState([])

     useEffect(()=>{

    const url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
    .then(response => response.json())
    .then((data)=>setPokemones(data.results))

  , []
}

 )








  return (
    <>
    <ul> 
    
    {pokemones.map(pokemon=> <li key={pokemon.id}>{pokemon.name}</li>)}
 
    
    
    </ul>





    </>
  )
}

  //{cart.map(producto => <li key={producto.id}>{producto.tipo}</li>)}

export default Pokemons