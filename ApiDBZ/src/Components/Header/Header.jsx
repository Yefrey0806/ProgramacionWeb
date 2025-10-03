import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo_dragonballapi.webp'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="No hay imagen" />
      <h1>Bienvenidos a la Api de Dragon ball</h1>
    </header>
  )
}

export default Header
