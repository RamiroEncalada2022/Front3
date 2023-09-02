import React, { useEffect, useState } from 'react'

const Ditto = () => {


const [ditto, setDitto]= useState({});

useEffect(()=>{

    const url=("https://pokeapi.co/api/v2/pokemon/ditto")
    
    fetch(url)
    
    .then((response) => response.json())
    
    .then((data) => setDitto(data))

}, []
)



  return (
    <div>
        {ditto.name}
    </div>
  )
}

export default Ditto