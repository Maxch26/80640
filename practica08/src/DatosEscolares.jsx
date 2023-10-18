function DatosEscolares() {
    return(
        <>
         <fieldset>
        <legend>Datos Escolares</legend>
        <label htmlFor="carrera">Nombre: </label>
        <input type="text: " id="carrera"/>
        <label htmlFor="semestre">Semestre: </label>
        <input type="text" id="semestre"/>
        <label htmlFor="matricula">Matricula: </label>
        <input type="text" id="matricula"/>
    </fieldset>
        </>
    )
}

export default DatosEscolares