import './Tricks.css';
import Card from '../Card/Card';

const Tricks = ({ tricks }) => {

  const trickCards = tricks.map((trick) => {
    const { stance, name, obstacle, tutorial, id  } = trick

  return (
    <Card
        id={id}
        stance={stance}
        name={name}
        obstacle={obstacle}
        tutorial={tutorial}
        key={id}
      /> 
    )
  })

  return (
    <div className='idea-container'>
      {trickCards} 
    </div>
  )
}

export default Tricks








