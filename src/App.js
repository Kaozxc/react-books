import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const quotes = [
  'It was a pleasure to burn',
  'Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me.',
  'It’s still magic even if you know how it’s done',
  'Rucham kurwy',
]

function App() {
  const [counter, setCounter] = useState(2)
  return (
    <div 
      onClick={(event) => setCounter(counter + 1)}
      className="App"
    >
      {quotes[counter % quotes.length]}
    </div>
  );
}

export default App;
