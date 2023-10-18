function DatosPersonales() {
    return(
        <>
         <fieldset>
        <legend>Datos Personales</legend>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre"/>
        <label htmlFor="Paterno">Apellido Paterno: </label>
        <input type="text" id="Paterno"/>
        <label htmlFor="Materno">Apellido Materno: </label>
        <input type="text" id="Materno"/>
        <label htmlFor="password">Contraseña: </label>
        <input type="password" id="password"/>
    </fieldset>
        </>
    )
}

export default DatosPersonales