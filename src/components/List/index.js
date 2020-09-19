import React,{useEffect,useState} from 'react';
import Item from "../Item";
import Listado from "../../hardc.json";


function List() {
  const [filtro,setFiltro] = useState([]);
  
  useEffect(() => {
   
  
      fetchData();
     },[]);

     async function fetchData(){
      const data = await fetch({Listado});
      const dataJson = await data.json();
   
      setFiltro(dataJson);
      console.log(dataJson);
      
    }

  return(<>
    <Item/> 
  
    </>
  )
}

export default List;