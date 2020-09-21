import React from 'react';
import "./style.scss";

function Item(props) {
  const {name,imagen,desc} = props;
  return (<div className="itemconte">    
    <img className="logo" src={imagen}/>
  <div className="txtconte"><h1>{name}</h1>
  <p> {desc}</p></div>
   </div>)
}

export default Item;