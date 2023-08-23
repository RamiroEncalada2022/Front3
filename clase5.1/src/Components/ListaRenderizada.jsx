import React from 'react'

import ({alumno}) from './'

const ListaRenderizada = (alumno) => {
  return (
    <div>
    <h2>Lista de agregados</h2>  
    <div>
        {list.map(alumno =>(
         <div key={alumno.id}>
            <h3>{alumno.nombre} {alumno.apellido}</h3>
        </div>
        ))}
    </div>
    </div>
  )
}

export default ListaRenderizada