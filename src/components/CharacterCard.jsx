import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import '../styles/CharacterCard.scss'

function CharacterCard(props) {

  return (
    <article className="CharacterCard_article">
      <Link to={`/character-detail/${props.id}`}>
        <img className="CharacterCard_img"
        src={props.photo || `https://placehold.co/210x295/000000/777777/jpeg?font=playfair-display&text=${props.name}`} 
        alt={props.name}/>
        <div className="CharacterCard_textContainer">
            <h3>{props.name}</h3>
            <p>{props.species}</p>
        </div>
      </Link>
    </article>
  )
}

CharacterCard.propTypes = {
    id: PropTypes.string,
    photo: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string
}

export default CharacterCard