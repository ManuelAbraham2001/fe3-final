import { createContext, useReducer, useEffect, useContext } from 'react';
import React, { useState } from 'react';

export const initialState = {
  theme: localStorage.getItem('theme') || "light",
  apiData: [],   
  favs: JSON.parse(localStorage.getItem("favDentists")) || [],      
};

const globalReducer = (state, action) => {
  switch (action.type) {

    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); 
      return { ...state, theme: newTheme }; 

    case 'SET_API_DATA':
      return { ...state, apiData: action.payload };

      case 'ADD_FAV':
        const newFav = action.payload;
        if (!state.favs.some(fav => fav.id === newFav.id)) {
          const updatedFavs = [...state.favs, newFav];
          localStorage.setItem('favDentists', JSON.stringify(updatedFavs));
          return { ...state, favs: updatedFavs };
        }
        return state;

      case 'REMOVE_FAV':
        const favToRemoveId = action.payload;
        const updatedFavs = state.favs.filter(fav => fav.id !== favToRemoveId);
        localStorage.setItem('favDentists', JSON.stringify(updatedFavs)); 
        return { ...state, favs: updatedFavs };
        
    default:
      return state;
  }
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    async function fetchData() {
      const endpoint = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(endpoint);
      const data = await response.json();
      dispatch({ type: 'SET_API_DATA', payload: data });
    }
    fetchData();
  }, []);



  const contextValue = {
    ...state,
    toggleTheme: () => {
      dispatch({ type: 'TOGGLE_THEME' });
    },
    addToFavorites: dentist => {
      dispatch({ type: 'ADD_FAV', payload: dentist });
    },
    removeFromFavorites: dentistId => {
      dispatch({ type: 'REMOVE_FAV', payload: dentistId });
    },
  };

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useGlobalContext = () => useContext(ContextGlobal)