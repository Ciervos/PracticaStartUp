import React,{useState} from 'react';
import './style.scss';
import InputAdd from '../../components/InputAdd';
import {useNotEmpty} from '../../hooks/notEmpty';
import Button from '../../components/Button';
import Nav from '../../components/Nav';


function Agregar() {  

  const[inputs,setInputs] = useState({});
  const requiredFields = ["Nombre", "Logo", "Mail"];
  const errors = useNotEmpty(inputs, requiredFields);

  function handleInfo(e){
 const{value,name} = e.target;
  setInputs({...inputs,[name]:value});
 
  }

  function addStartup() {
    if (errors.length == 0) {
      console.log("El formulario es valido");
      
      localStorage.setItem(inputs.Nombre,JSON.stringify(inputs));
     
    } else {
      console.log(`Tenes un error en ${errors}`);
    }
  }

  return (
<>
<Nav/>
<InputAdd name="Nombre" len="2" onChange={handleInfo}/>
<InputAdd name="Logo" len="3"onChange={handleInfo}/>
<InputAdd name="Mail" len="3"onChange={handleInfo}/>
<textarea name="Desc" onChange={handleInfo}/>
<InputAdd name="Web" len="0" place="opcional" onChange={handleInfo}/>
<InputAdd name="Twitter" len="0" place="opcional"onChange={handleInfo}/>
<InputAdd name="Instagram" len="0" place="opcional" onChange={handleInfo}/>
<Button onClick={addStartup} label="Agregar startup" />
</>


  )
}

export default Agregar;