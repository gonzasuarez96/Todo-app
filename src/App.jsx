import React, { useEffect, useState } from 'react';
import { main } from './App.module.scss'
import Formulario from './Components/Formulario'
import ListaDeServicios from './Components/ListaDeServicios'

function App() {
  const [servicios, setServicios] = useState(()=>{
    try{
      const serviciosEnLocalStorage = localStorage.getItem('servicios');
      return serviciosEnLocalStorage? JSON.parse(serviciosEnLocalStorage) : [];
    }catch(error){
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('servicios', JSON.stringify(servicios));
  }, [servicios]);

  const [servicio, setServicio] = useState({
    id: Math.random()* 9999,
    titulo: '',
    descripcion: '',
    comprobante: null,
  });

  const addServicio = (servicio) => {
    setServicios([...servicios, servicio]);
  };

  const onChange = (e) => {
    if (e.target.type === "file") {
      setServicio({ ...servicio, [e.target.name]: e.target.files[0] });
    } else {
      setServicio({ ...servicio, [e.target.name]: e.target.value });
    }
  };

  const {titulo, descripcion, comprobante} = servicio

  const onSubmit = (e) => {
    e.preventDefault();

    if (titulo === '' || descripcion === ''){
      alert('Debes completas los dos campos');
    } else {
      addServicio(servicio);
      setServicio({
        id: Math.random()* 9999,
        titulo: '',
        descripcion: '',
        comprobante: null,
      })
    }
  }

  const removeServicio = (id) => {
    const newServicio = [...servicios].filter((servicio)=>servicio.id !== id);
    setServicios(newServicio);
  }

  return (
    <main className={main}>
      <Formulario onChange={onChange} servicio={servicio} onSubmit={onSubmit}/>
      <ListaDeServicios servicios={servicios} removeServicio={removeServicio}/>

    </main>
  )
}

export default App
