import React from 'react';
import './style.scss';
import {useValid} from '../../hooks/validate';

function InputAdd(props) {
  const [isValid,handleChange] = useValid(props.len);
  const {name,place,onChange} = props;

  return(<div className="inputcont">
  <label>{name}</label>
  <input name={name} type="text" placeholder={place} onKeyDown={handleChange} onChange={onChange}/>
  
  
  {props.len > 0 &&(isValid ? <p>Válido</p> :<p>no válido</p>)}
  </div>)
}

export default InputAdd;