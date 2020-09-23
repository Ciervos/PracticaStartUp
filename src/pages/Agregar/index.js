import React,{useState} from 'react';
import './style.scss';
import InputAdd from '../../components/InputAdd';
import {useValid} from '../../hooks/validate';


function Agregar() {
  const [quetal] = useValid();
  const[inputs,setInputs] = useState({});

  function handleInfo(e){
 const{value,name} = e.target;
  setInputs({...inputs,[name]:value});
 
  }

  return (
<form>
<InputAdd name="Nombre" len="2" onChange={handleInfo}/>
<InputAdd name="Logo" len="3"onChange={handleInfo}/>
<InputAdd name="Mail" len="3"onChange={handleInfo}/>
<textarea/>
<InputAdd name="Web" len="0" place="opcional" onChange={handleInfo}/>
<InputAdd name="Twitter" len="0" place="opcional"onChange={handleInfo}/>
<InputAdd name="Instagram" len="0" place="opcional" onChange={handleInfo}/>
<input type="submit" value="Submit"/>

</form>

  )
}

export default Agregar;