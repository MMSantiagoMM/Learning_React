import logo from './logo.svg';
import './App.css';
import Dado from './Dado';
import { useState } from 'react';

function App() {
  /* function generarValor(){
    return Math.trunc(Math.random()*6) + 1;
  }

  function tirar(){
    setValor1(generarValor)
    setValor2(generarValor)
    setValor3(generarValor)
  }
  
  const[valor1,setValor1]=useState(0)
  const[valor2,setValor2]=useState(0)
  const[valor3,setValor3]=useState(0)
 */




  const [numero,setNumero]=useState(0)
  
  function contar (){
    return setNumero()
  }



  return (
    <div>
{/*       <Dado valor={valor1}/>
      <Dado valor={valor2}/>
      <Dado valor={valor3}/>
      <br/>
      <button onClick={tirar}>Tirar</button> */}

    </div>
  );
}

export default App;
