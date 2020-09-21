import React,{useState} from 'react';
import { EjProvider } from './context/EjContext';
import Nav from './components/Nav';
import Content from './components/Content';
import List from './components/List';

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
      <List/>      
      <footer>Made by SCREAMS&PAIN by Gremlin</footer>
    </EjProvider>
  );
}

export default App;
