import React from 'react';
import DisplayScrambledWord from '../src/Components/DisplayScrambledWord';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Texas Word Scramble</h1>
        <DisplayScrambledWord />
      </header>
    </div>
  );
}

export default App;
