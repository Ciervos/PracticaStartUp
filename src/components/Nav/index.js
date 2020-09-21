import React from 'react';
import InputText from '../InputText';
import Search from '../Search';
import "./style.scss";
import logo from '../../imgs/Butterfly.png';

function Nav() {
  return(
    <div id="navbar">
    <img src={logo}/>
    <Search/>
    <a href="">Agregar startup</a>
    
    </div>
  )
}

export default Nav;