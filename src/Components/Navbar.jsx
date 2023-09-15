import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ContextGlobal)


  return (
    <nav>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favoritos</Link>
        <Link to='/contact'>Contacto</Link>
      </div>
      <button onClick={toggleTheme}>{theme === 'light' ? '☀️' : '🌙'}</button>
    </nav>
  )
}

export default Navbar