import React from 'react'
import Card from '../Components/Card'
import  { useGlobalContext }  from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { apiData } = useGlobalContext();

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {apiData.map(e => 
            <Card key={e.id} name={e.name} username={e.username} id={e.id}></Card>
        )}
      </div>
    </main>
  )
}

export default Home