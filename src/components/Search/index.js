import React,{useContext} from 'react';
import EjContext from "../../context/EjContext";
import "./style.scss";


function Search() {
  const laData = useContext(EjContext);
  const {handleAlgo} = laData;

  function handleChange(e){
    handleAlgo(e.target.value) 
  }
  
 
  return (
  <>
  <input onChange={handleChange} className="searchstyle" type="text"/>
  </>
    )
}

export default Search;