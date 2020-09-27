import React,{useState} from 'react';

export const useCustomStorage= () =>{
 let local = {...localStorage} 
 const [todojunto, setTodoJunto] = useState(local)
 const testing = (Object.entries(local).map((item,key)=>{
  return(JSON.parse(item[1]))
  }))

 return(testing)
}