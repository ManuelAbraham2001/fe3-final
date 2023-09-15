import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams();
  const [dentista, setDentista] = useState({});

  const getDentista = async () => await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(data => data.json()).then(res => setDentista(res))

  useEffect(() => {
    getDentista()
  }, [])


  return (

    <main>
      <h1>Detail Dentist id </h1>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <dir style={{textAlign: "center"}}>
        <p>Nombre: {dentista.name}</p>
        <p>Email: {dentista.email}</p>
        <p>Telefono: {dentista.phone}</p>
        <p>Website: {dentista.website}</p>
      </dir>

    </main>

  )
}

export default Detail