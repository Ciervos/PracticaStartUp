import React,{useState} from 'react';
import { EjProvider } from './context/EjContext';
import Nav from './components/Nav';
import Content from './components/Content';

function App() {
 const [cont,setCont] = useState("");

 function handleAlgo(info){
  setCont(info)
 }

  const contextData ={
   cont,
   handleAlgo,
  }
 
  return (
    <EjProvider value={contextData}>
      <Nav/>
      <Content/>
      
    </EjProvider>
  );
}

export default App;
