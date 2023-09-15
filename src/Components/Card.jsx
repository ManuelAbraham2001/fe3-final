import React, { useContext } from "react";
import { useGlobalContext } from "./utils/global.context";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const { favs, addToFavorites, removeFromFavorites } = useGlobalContext();
  
  const isFavorite = favs.some((fav) => fav.id === id)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({name, username, id});
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <span>ID: {id}</span>
        <h2>Nombre: {name}</h2>
        <h3>Usuario: {username}</h3>
        
      </Link>
      <button style={isFavorite ? {color: "red"} : null} onClick={toggleFavorite} className={`favButton ${isFavorite ? 'favActive' : ''}`}>
        {isFavorite ? 'Borrar de favoritos' : 'Agregar a favoritos'}
      </button>
    </div>
  );
};

export default Card;
