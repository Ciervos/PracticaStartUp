import React,{useContext} from 'react';
import EjContext from "../../context/EjContext";

function Content() {
  const laData = useContext(EjContext);
const {cont} = laData;
  return (
  <>
  <p>{cont}</p>
  </>
    )
}

export default Content;