import PropTypes from "prop-types"
import '../styles/CharacterCard.scss'

function CharacterCard(props) {

  return (
    <article className="CharacterCard_article">
        <img className="CharacterCard_img"
        src={props.photo || `https://placehold.co/210x295/ffffff/666666/jpeg?font=playfair-display&text=${props.name}`} 
        alt={props.name}/>
        <div className="CharacterCard_textContainer">
            <h3>{props.name}</h3>
            <p>{props.species}</p>
        </div>
    </article>
  )
}

CharacterCard.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string
}

export default CharacterCard