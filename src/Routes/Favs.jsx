import React, { useContext } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Favs = () => {

  const { favs } = useGlobalContext()

  return (
    <main>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? favs.map((dentist) => (
          <Card key={dentist.id} id={dentist.id} username={dentist.username} name={dentist.name} />
        )) : <p>No hay favoritos</p>}
      </div>
    </main>
  );
};

export default Favs;
