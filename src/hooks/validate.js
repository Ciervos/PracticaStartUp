import React,{useState} from 'react';

export const useValid = (mlength = 1) =>{
 const [isValid,setIsValid] = useState(false);

 const handleChange = (e) =>{
   const {value} = e.target
   const _isValid = value.length >= mlength ? true : false
   setIsValid(_isValid) 
 }

 return[isValid,handleChange]
}