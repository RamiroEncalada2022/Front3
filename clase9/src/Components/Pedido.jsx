import React, { useEffect, useState } from 'react'
import Pizza from './Pizza';

const Pedido = () => {

    const [show, setShow] =useState(false);

    useEffect(()=>{

      console.log("El componente fue actualizado");

        setTimeout(()=>{

            setShow(true)

        }, 2000)

    }, []);

    



  return (

    <div>
     
        <h2>Su pedido:</h2>
        {show && <Pizza/>}
        <button onClick={() => setShow(false) & alert("El pedido fue cancelado") & console.log("El componente fue desmontado")}>Cancelar pedido</button>
        
        
    </div>
  );

  
}

export default Pedido