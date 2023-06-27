import React from 'react';
import ReactDOM from 'react-dom/client';
import "./bootstrap.css"
import { CuadrosTexto } from './CuadrosTexto';
import "./styles.css"
import { Tabla } from './Tabla';
import { AgregarTabla } from './AgregarTabla';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <h1 className='alineartexto'>Formulario Persona</h1>
  <div className='row'>
  <CuadrosTexto tamanoinput="col-md-4" titulolabel="Nombre:" tipoinput="text" nombreinput="nombre" idinput="nombre" placeholderinput="Escriba su Nombre"/>
  <CuadrosTexto tamanoinput="col-md-4" titulolabel="Apellido" tipoinput="text" nombreinput="apellido" idinput="apellido" placeholderinput="Escriba su Apellido"/>
  <CuadrosTexto tamanoinput="col-md-4" titulolabel="Celular:" tipoinput="number" nombreinput="celular" idinput="celular" placeholderinput="Escriba su Celular"/>
  </div>
  <div className='row'>
  <CuadrosTexto tamanoinput="col-md-6" titulolabel="Direccion:" tipoinput="text" nombreinput="direccion" idinput="direccion" placeholderinput="Escriba su Direccion"/>
  <CuadrosTexto tamanoinput="col-md-6" titulolabel="Correo Electronico:" tipoinput="email" nombreinput="email" idinput="email" placeholderinput="Escriba su Email"/>
  </div>
  <br/>
  <button onClick={AgregarTabla} className='btn btn-success margenboton'>Agregar Informacion</button>
  <br/><br/><br/>
  <hr></hr>
  <Tabla/>
</div>);