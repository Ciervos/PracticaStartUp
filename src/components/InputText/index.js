import React,{useContext} from 'react';
import EjContext from "../../context/EjContext";

function InputText() {
const laData = useContext(EjContext);
const {handleAlgo} = laData;

function handleInfo(e){
  
  handleAlgo(e.target.value) 

}

  return (
  <input onChange={handleInfo} type="text"/>
  )
}

export default InputText;