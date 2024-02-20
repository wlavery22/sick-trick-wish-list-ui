import './Form.css'
import { useState } from 'react' 

function Form(){
  const [stance, setStance]  = useState("")
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [tutorial, setTutorial] = useState("");
 

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

        <button>SEND IT</button>
    </form> 
  )
}

export default Form; 

{/* //submit buttons will change later */}

{/* event listener, when triggered by user typing something into the input field, setTitle function is called with a new value of input as the argument, it updates the state of the title variable. 

type='text' This can be password, radio, checkbox or Number
placeholder='Title' will say Title in the input 
name='title', need this when handling multiple inputs 
value={title} useful for form validation </form>  */}