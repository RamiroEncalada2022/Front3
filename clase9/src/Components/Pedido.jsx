import React, { useEffect, useState } from 'react'
import Pizza from './Pizza';

const Pedido = () => {

   

    const [show, setShow] =useState(false);


    useEffect(()=>{


      

  

        setTimeout(()=>{

            setShow(true)

            console.log("Se actualizó el componente")

        }, 2000)

    }, []);

    



  return (

    <div>
     
        <h2>Su pedido:</h2>
        {show && <Pizza/>}
        <button onClick={() => setShow(false) & alert("El pedido fue cancelado") }>Cancelar pedido</button>
        
        
    </div>
  );

  
}

export default Pedido


