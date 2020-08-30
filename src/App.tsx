import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle(t => !t)}>Click me</button>
      <header className={`App-header ${toggle ? "selected" : ""}`}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
