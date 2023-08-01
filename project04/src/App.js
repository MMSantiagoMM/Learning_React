import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  function generateRandom() {
    const vector = new Array(5)
    for(let i = 0; i < vector.length;i++){
      vector[i]=Math.trunc(Math.random ()*20);
    }
    setValores(vector);
    console.log(vector)
  }


  const [numeros, setValores] = useState([0, 0, 0, 0, 0]);

  return (
    <div>
      <p>Numero aleatorio : </p>
      {numeros.map(num => (
        <p>{num}</p>
      ))}
      <button onClick={generateRandom}>Generar</button>


    </div>
  );
}

export default App;
