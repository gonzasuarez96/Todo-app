import React from "react";
import Servicio from "../Servicio";
import {serviciosContainer} from './styles.module.scss'


export default function ListaDeServicios({servicios, removeServicio}) {
  return (
    <div className={serviciosContainer}>
      {servicios && servicios.map(({titulo, descripcion, id}) => (
        <Servicio titulo={titulo} descripcion={descripcion} removeServicio={() => removeServicio(id)} />
      ))}
    </div>
  );
}
