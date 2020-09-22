import React from 'react';
import './style.scss';
import {useValid} from '../../hooks/validate';

function InputAdd(props) {
  const [isValid,handleChange] = useValid(props.len);

  return(<div className="inputcont">
  <label>{props.name}</label>
  <input type="text" placeholder={props.place} onChange={handleChange}/>
  
  
  {props.len > 0 &&(isValid ? <p>Válido</p> :<p>no válido</p>)}
  </div>)
}

export default InputAdd;