import React from "react";
import { servicioCard,
tituloContainer,
tituloCard,
descripcionCard} from './styles.module.scss'

export default function Servicio({titulo,descripcion, removeServicio}) {
    return(
        <div className={servicioCard}>
            <div className={tituloContainer}>
                <p className={tituloCard}>{titulo}</p>
                <svg 
                    onClick={removeServicio}
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 0C4.42857 0 0 4.42857 0 10C0 15.5714 4.42857 20 10 20C15.5714 20 20 15.5714 20 10C20 4.42857 15.5714 0 10 0ZM13.8571 15L10 11.1429L6.14286 15L5 13.8571L8.85714 10L5 6.14286L6.14286 5L10 8.85714L13.8571 5L15 6.14286L11.1429 10L15 13.8571L13.8571 15Z" fill="#775602"/>
                </svg>
            </div>
            <p className={descripcionCard}>{descripcion}</p>
        </div>
    )
}