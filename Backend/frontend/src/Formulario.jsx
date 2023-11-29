import { Button, TextField, Box } from "@mui/material"
import { useState } from "react"
import axios from "axios";
function Formulario(props){
    const [Cargando, setCargando] = useState(false)
const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    apellido: ''
})

const hacerPeticion = async () => {
    try{
        const response = await axios.post('http://localhost:4567/datosAlmacenados', datosFormulario)
        console.log(response.data)
        //return response.data
    } catch (error) {
        throw error
    }
}

const Obtener = async () => {
    const res = await axios.get('http://localhost:4567/recuperar', datosFormulario)
    console.log(res.data)
}

const Modificar= async () => {
    const res = await axios.put('http://localhost:4567/modificar', datosFormulario)
    console.log(res.data)
}

const Eliminar= async () => {
    const res = await axios.delete('http://localhost:4567/eliminar')
    console.log(res.data)
}



    const procesarFormulario = async (evento) => {
        evento.preventDefault()
        //console.log("datos recuperados del formulario", datosFormulario)
        setCargando(true)
        try{
         const response = await hacerPeticion()
         //console.log(res)
         setCargando(false)
         //validar el formulario contra lo del backend
         if (datosFormulario.nombre === response.alumno) {
            console.log('ok el usuario existe')
         } else {
            //console.log('error el usuario no existe')
         }
        }catch(error) {
        // console.log('error', error)
         setCargando(false)
        }
    }

    const cambiosFormulario = (evento) => {
        //console.log(evento.target)
        const {name,value} = evento.target
        setDatosFormulario({...datosFormulario, [name]:value})
    }


return (
<>
<form onSubmit={ procesarFormulario }>
<h1>Inicio de sesión</h1>

<Box m={5}>
    <TextField label = "Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
</Box>
<Box m={5}>
    <TextField label = "Apellido:" variant="outlined" fullWidth onChange={cambiosFormulario} name="apellido" value={datosFormulario.apellido}></TextField>
</Box>
<Box m={5}>
<Button variant = "contained" type="submit" color="primary" fullWidth disabled={Cargando}>Agregar usuario</Button>
</Box>
<Box m={5}>
<Button variant = "contained" onClick={Obtener} color="primary" fullWidth disabled={Cargando}>Obtener usuario</Button>
</Box>
<Box m={5}>
<Button variant = "contained" onClick={Modificar} color="primary" fullWidth disabled={Cargando}>Modificar usuario</Button>
</Box>
<Box m={5}>
<Button variant = "contained" onClick={Eliminar} color="primary" fullWidth disabled={Cargando}>Eliminar usuario</Button>
</Box>
</form>
</>
)
}

export default Formulario

