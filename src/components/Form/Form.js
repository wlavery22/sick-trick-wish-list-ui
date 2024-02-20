import './Form.css'
import { useState } from 'react' 

function Form({addTrick}){
  const [stance, setStance]  = useState("")
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [tutorial, setTutorial] = useState("");
 
  function submitTrick(event) {
    event.preventDefault()
  
    const newTrick = {
      id: Date.now(), 
      name: name,
      stance: stance,
      obstacle: obstacle,
      tutorial: tutorial,
      key: Date.now()
    };

    addTrick(newTrick)
      clearInput() 
  }

  function clearInput() {
    setStance("")
    setName("")
    setObstacle("")
    setTutorial("")
  }

  return (
    <form> 
      <input
        type='text'
        placeholder='Name of Trick'
        name='name' 
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <select
        name='stance'
        value={stance}
        onChange={event => setStance(event.target.value)}
      >
        <option value="">Select a Stance</option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>

      <select
        name='obstacle'
        value={obstacle}
        onChange={event => setObstacle(event.target.value)}
      >
        <option value="">Select an obstacle</option>
        <option value="Flatground">Flatground</option>
        <option value="Ledge">Ledge</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Pool">Pool</option>
      </select>

      <input
        type='text'
        placeholder='Link to Tutorial'
        name='tutorial' 
        value={tutorial}
        onChange={event => setTutorial(event.target.value)}
      />
      
        <button className="submitTrick" onClick = {event => submitTrick(event)}>SEND IT</button>
    </form> 
  )
}

export default Form; 
