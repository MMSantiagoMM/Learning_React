import logo from './logo.svg';
import './App.css';

function returnNumberRamdom(){
  return Math.trunc(Math.random() * 10);
}

function showTitle(title){
  return (
    <h2>{title}</h2>
  )
}


function App() {
  const century = 21;
  const person = {
    name: 'Santiago',
    age: 27
  }
  const buscadores = ['http://www.google.com','http://www.bing.com','http://www.yahoo.com']

  return (
    <div>
      <h1>Title level 1</h1>
      <hr/>
      <p>We are in the {century} century</p>
      <h3>Acceso a un objeto</h3>
      <p>{person.name} tiene {person.age} years old</p>
      <h3>call to function</h3>
      <p>Ramdom number called to method</p>
      {returnNumberRamdom()}
      <h3>Calculate inmediatly of expressions</h3>
      3 + 3 = {3+3}
      <h3>Buscadores</h3>
      <a target='_blank' href={buscadores[0]}>Google</a> <br/>
      <a target='_blank' href={buscadores[1]}>Bing</a> <br/>
      <a target='_blank' href={buscadores[2]}>Yahoo</a> 

      <h3>Retornar titulo con función</h3>
      {showTitle("Retornando función")}

    </div>
  );
}

export default App;
