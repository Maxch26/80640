import MiFieldSet from "./MiFieldSet"
import DatosEscolares from "./DatosEscolares"
import DatosPersonales from "./DatosPersonales"

function Formulario() {
    return (
        <>
<form>
    {/* <MiFieldSet titulo="datos Personales" txt1="nombre" txt2="password"/>
    <MiFieldSet titulo="datos Escolares" txt1="carrera" txt2="semestre"/> */}
    <DatosPersonales></DatosPersonales>
    <DatosEscolares></DatosEscolares>
    <input type="submit" value="Enviar datos" />
    </form>
        </>
    )
}

export default Formulario