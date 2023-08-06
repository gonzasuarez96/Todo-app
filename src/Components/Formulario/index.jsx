import React from "react";
import { formContainer,
    form,
    inputsContainer,
    tituloInput,
    descripcionInput,
    agregar,
} from './styles.module.scss'

export default function Formulario({onChange, servicio, onSubmit}) {
    const {titulo, descripcion} = servicio;

    return(
        <div className={formContainer}>
            <h2>Lista de Tareas</h2>
            <form className={form} onSubmit={e => onSubmit(e)}>
                <h3>Agrega una Tarea</h3>
                <div className={inputsContainer}>
                    <input 
                        placeholder='Nombre de la tarea...' 
                        type='text'  
                        className={tituloInput}
                        onChange={e => onChange(e)}
                        name='titulo'
                        value={titulo}
                    />
                    <textarea  
                        placeholder="Descripcion..." 
                        className={descripcionInput}
                        onChange={e => onChange(e)}
                        name='descripcion'
                        value={descripcion}
                    />

                    <button className={agregar}>Agregar</button>
                </div>
            </form>

        </div>
    )
}    