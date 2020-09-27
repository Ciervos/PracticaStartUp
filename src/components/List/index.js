import React,{useEffect,useState,useContext} from 'react';
import EjContext from "../../context/EjContext";
import Item from "../Item";
import Listado from "../../hardc.json";
import "./style.scss";
import {useCustomStorage} from '../../hooks/customStorage';


function List() {
  const testeo = useCustomStorage();
  const [filtro,setFiltro] = useState(testeo);
  const laData = useContext(EjContext);
  const {cont} = laData;
  

  
  // useEffect(() => {
   
  
  //     fetchData();
  //    },[]);

  //    async function fetchData(){
  //     const data = await fetch(Listado);
  //     const dataJson = await data.json();
   
  //     setFiltro(dataJson);
  //     console.log(Listado);
      
  //   }

  
//

//

  return(<div className="listaconte">
  
  {filtro.filter((startup) =>{
       return(startup.Nombre
        .toLowerCase()
        .includes(cont.toLowerCase()))
     }).map((startup, key) => {
        return (
          <Item name={startup.Nombre} desc={startup.Desc} imagen={startup.Logo} mail={startup.Mail} web={startup.Web} twitter={startup.Twitter} ig={startup.Instagram} key={key}/>
        );
      })}
  
    </div>
  )
}

export default List;