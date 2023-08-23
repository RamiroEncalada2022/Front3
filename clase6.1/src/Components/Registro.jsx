import { useState } from 'react'

const Registro = () => {

    const [usuario, setUsuario]= useState({
        nombre: "",
        edad: "",
        pokemonFavorito: ""
    })

    const [show, setShow]=useState(false)
    const [error, setError]=useState(false)

    const validarNombre = (nombre)=>{
        const nombreSinEspacios = nombre.trim();
        if(isNaN(nombreSinEspacios) && nombreSinEspacios.length>2){
            return true
        }else{false}    
        }

    const validarEdad = (edad) =>{
        if(Number(edad)>0 && !isNaN(Number(edad))){
        return true
    }else{false} }


    const handleSubmit = (e) => {

        e.preventDefault();

        const nombreValido = validarNombre(nombre);
        const edadValida= validarEdad(edad);

        if (nombreValido  || edadValida){
            setError(false);
            setShow(true)
        }else{
            setError(true)
            setShow(false)
        }   
    }


  return (

    <form onSubmit={handleSubmit} >
        <label>Ingrese nombre</label>
        <input type="text" onChange={(e)=>setUsuario({...usuario, nombre: e.target.value})}/>
        <label>Ingrese edad</label>
        <input type="text" onChange={(e)=>setUsuario({...usuario, edad: e.target.value})}/>
        <label>Ingrese pokemon favorito</label>
        <input type="text" onChange={(e)=>setUsuario({...usuario, pokemonFavorito: e.target.value})}/>

        <button>Registro</button>

        {error && <h6>Corrobore bien la info</h6>}

        {show && 
         <h4>Gracias por registrarte {usuario.nombre} de {usuario.edad}, tu pokemon favorito es: {pokemonFavorito} </h4>  
        }




    </form>
    
  )
}

export default Registro