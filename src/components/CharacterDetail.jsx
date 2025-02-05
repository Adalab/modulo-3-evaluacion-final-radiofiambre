import PropTypes from "prop-types"
import { Link, useParams } from "react-router-dom"
import '../styles/CharacterDetail.scss'

function CharacterDetail({defineDetailInfo}) {

    const { characterId } = useParams();
    console.log(characterId); //dd925874-e800-4eb4-9f0d-4d0fed15634b
    const character = defineDetailInfo(characterId);
    console.log(character);

  return (
    <>
    <body>
        <div className="CharacterDetail_container">
            <Link to={'/'}><a className="CharacterDetail_linkBack" href="">&lt; Volver</a></Link>
            <article className="CharacterDetail_article">
                <img className="CharacterDetail_img" src={character.photo || `https://placehold.co/210x295/000000/777777/jpeg?font=playfair-display&text=${character.name}`}
                alt={character.name} />
                <div className="CharacterDetail_textContainer">
                    <h3>{character.name}</h3>
                    <h4>{character.alternateNames && character.alternateNames.length > 0 ? character.alternateNames.join(', ') : 'No tiene apodos'}</h4>
                    <p>Estatus: <span>{character.alive ? "alive 💖" : "dead 💀"}</span></p>
                    <p>Especie: <span>{character.species}</span></p>
                    <p>Género: <span>{character.gender}</span></p>
                    <p>Casa: <span>{character.house}</span></p>
                </div>
            </article>
        </div>
    </body>
    </>
  )
}

CharacterDetail.propTypes = {
    defineDetailInfo: PropTypes.func,
    id: PropTypes.string,
    photo: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    house: PropTypes.string
}

export default CharacterDetail