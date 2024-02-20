import './Card.css'

const Card = ({ stance, name, obstacle, tutorial, id }) => {

  return (
    <div className='card'>
      <p>{name}</p>
      <p>{stance}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial: {tutorial}</p>
    </div>
  )
}

export default Card


