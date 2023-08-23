import React from 'react'
import { useState } from 'react'

const ListaOriginal = () => {

    const lista= [

        {id: 1, nombre : "Pepe", apellido: "García" },
        {id: 2, nombre : "Pepa", apellido: "Perez" },
        {id: 3, nombre : "Pepín", apellido: "Gonzalez" },
    
    ]

    const [list, setList]=useState([])

    const agregarListaRenderizada =(alumno)=>{

        const nuevaLista = [

            alumno,
            ...list

        ]

        setList(nuevaLista)

    }



    return(
        
        <div>


         {lista.map(alumno =>(
         <div key={alumno.id}>
            <h3>{alumno.nombre} {alumno.apellido}</h3>
            <button onClick={()=>agregarListaRenderizada(alumno)}>Agregar</button>
        </div>
        ))}
    


         

         

        










</div>



    


        

        

  
)

}



        

    


export default ListaOriginal