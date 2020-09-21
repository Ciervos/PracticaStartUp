import React,{useEffect,useState,useContext} from 'react';
import EjContext from "../../context/EjContext";
import Item from "../Item";
import Listado from "../../hardc.json";
import "./style.scss";


function List() {
  const [filtro,setFiltro] = useState(Listado);
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

  


  return(<div className="listaconte">
  
  {filtro.filter((startup) =>{
       return(startup.name
        .toLowerCase()
        .includes(cont.toLowerCase()))
     }).map((startup, key) => {
        return (
          <Item name={startup.name} desc={startup.desc} imagen={startup.img} key={key}/>
        );
      })}
  
    </div>
  )
}

export default List;