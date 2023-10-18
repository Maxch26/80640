import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MiFieldSet from './MiFieldSet.jsx'
import Formulario from "./formulario.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <form></form>
    <MiFieldSet titulo="datos Personales" txt1="nombre" txt2="password"/>
    <MiFieldSet titulo="datos Escolares" txt1="carrera" txt2="semestre"/>
    <input type="submit" value="Enviar datos" /> */}
  <Formulario></Formulario>
  </React.StrictMode>
)
