import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>HRate</h1>
        <p>Connect your Apple Watch</p>
      </div>
      <div className="Content">
        <text className="BPM-field">80<span className="BPM-units">BPM</span></text>
      </div>
    </div>
  );
}

export default App;