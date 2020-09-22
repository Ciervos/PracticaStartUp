import React from 'react';
import InputText from '../InputText';
import {Link} from  "react-router-dom";
import Search from '../Search';
import "./style.scss";
import logo from '../../imgs/Butterfly.png';

function Nav() {
  return(
    <div id="navbar">
    <img src={logo}/>
    <Search/>
    <Link to="/agregar">Agregar startup</Link>
    
    </div>
  )
}

export default Nav;