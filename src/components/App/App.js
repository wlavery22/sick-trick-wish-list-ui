import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import Tricks from "../Tricks/Tricks";


function App() {
  const [tricks, setTricks] = useState([]);

  const addTrick = (newTrick) => {
      setTricks([...tricks, newTrick]) 
    }

  const getAllTricks = () => {
    return fetch("http://localhost:3001/api/v1/tricks") 
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setTricks([...tricks, ...data]) 
      // setTricks([data])
    })
    .catch (error => console.log(error.message))
  }
  
  useEffect(() => {
	  getAllTricks()
  }, []);

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      {!tricks.length && <h2>There are no tricks yet -- add some!</h2>}
      <Tricks tricks={tricks}/>
      
    </div>
  );
}

export default App; 
