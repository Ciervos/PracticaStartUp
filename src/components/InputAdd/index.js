import React from 'react';
import './style.scss';

function InputAdd(props) {
   const {name,place,onChange} = props;

  return(<div className="inputcont">
  <label>{name}</label>
  <input name={name} type="text" placeholder={place} onChange={onChange}/>
  
  
  
  </div>)
}

export default InputAdd;