import React,{useEffect,useState} from 'react';
import Item from "../Item";
import Listado from "../../hardc.json";
import "./style.scss";


function List() {
  const [filtro,setFiltro] = useState(Listado);
  
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
  
  {filtro.map((startup, key) => {
        return (
          <Item name={startup.name} desc={startup.desc} imagen={startup.img} key={key}/>
        );
      })}
  
    </div>
  )
}

export default List;