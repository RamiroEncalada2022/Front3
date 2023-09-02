import React, { useEffect, useState } from 'react'

const Pedido2 = () => {
     

    console.log("se procesó el componente")

    const [show, setShow] = useState(false)

    useEffect(()=>{

        console.log("se montó el componente");

        return()=>{
            console.log("se desmontó el componente")
        }

    }, [])

    
    useEffect(()=>{

        console.log("se actualizó el estado show")

        setTimeout(() => {
            setShow(true);
          }, "2000")

        


        , []})

    




  return (

   
    <div>
         {console.log("se ejecutó el render")}
    
        <h2>Su pedido:</h2>
        <h3 setShow={setShow}>Pizza</h3>
        <button onClick={()=> setShow(false) }>Cancelar pedido</button>



    </div>
  )
}

export default Pedido2