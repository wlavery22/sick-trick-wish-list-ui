import './App.css';
import React from 'react';
import { useState } from "react";
import Tricks from "../Tricks/Tricks";


function App() {
  const [tricks, setTricks] = useState([]);

  http://localhost:3001/api/v1/tricks

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks tricks={tricks}/>
    </div>
  );
}

export default App; 
