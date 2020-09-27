import React from 'react';
import "./style.scss";

function Item(props) {
  const {name,imagen,desc,mail,web,twitter,ig} = props;
  return (<div className="itemconte">    
    <img className="logo" src={imagen}/>
  <div className="txtconte"><h1>{name}</h1>
  <p> {desc}</p>
<p><span className="itemlabels">Mail:</span> {mail}</p></div>

   </div>)
}

export default Item;