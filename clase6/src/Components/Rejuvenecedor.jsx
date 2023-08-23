import React from 'react'
import { useState } from 'react'

const Rejuvenecedor = () => {

    const [nombre, setNombre] = useState(" ");
    const [edad, setEdad] = useState("");

    const onChangeNombre = (e) => {setNombre(e.target.value)};
    const onChangeEdad = (e) => {setEdad(e.target.value)};


    const handleSubmit = (e) => {

        e.preventDefault();

        const nombreValido = validarNombre(nombre);
        const edadValida= validarEdad(edad);
        const nuevaEdad  = Number(edad)-10;

        if (!nombreValido  || !edadValida){
            alert("Alguno de los datos ingresados no son correctos");
       /* }else if (nuevaEdad<0){
            alert(`Hola ${nombre}. Felicitaciones, tu nueva edad es 0 años!!!`)*/
        }else{
            alert(`Hola ${nombre}. Felicitaciones, tu nueva edad es: ${nuevaEdad}!!!`)
        }
        

    }

    const validarNombre = (nombre)=>{
        const nombreSinEspacios = nombre.trim();
        if(isNaN(nombreSinEspacios) && nombreSinEspacios.length>0){
            return true
        }else{false}    
        }

    const validarEdad = (nuevaEdad) =>{
        if(nuevaEdad>0 && (nuevaEdad%2)==0 ){
        return true
    }else{false} }





  return (

    <form onSubmit={handleSubmit}>

        {}

       <label>Ingresa tu nombre</label>

        <input 
        type="text" 
        value={nombre}
        onChange={onChangeNombre}        
        />

        <label>Ingresa tu edad</label>

        <input 
        type="number" 
        value={edad}
        onChange={onChangeEdad}        
        />

        {}

        <button type='submit'>Enviar</button>



    </form>
  )
}

export default Rejuvenecedor