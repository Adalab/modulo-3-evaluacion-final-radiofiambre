import PropTypes from "prop-types"
import { Link, useParams } from "react-router-dom"
import '../styles/CharacterDetail.scss'

function CharacterDetail({defineDetailInfo}) {

    const { characterId } = useParams();
    console.log(characterId); //dd925874-e800-4eb4-9f0d-4d0fed15634b
    const character = defineDetailInfo(characterId);

  return (
    <>
    <body className="CharacterDetail_body">
        <div className="CharacterDetail_container">
            <Link to={'/'}><a className="CharacterDetail_linkBack" href="">&lt; Volver</a></Link>
            <article className="CharacterDetail_article">
                <img className="CharacterDetail_img" src={character.photo}
                alt={character.name} />
                <div className="CharacterDetail_textContainer">
                    <img className="CharacterDetail_houseEmblem" src={character.houseEmblem} alt={character.house}/>
                    <h3>{character.name}</h3>
                    <h4>{character.alternateNames && character.alternateNames.length > 0 ? character.alternateNames.join(', ') : 'No tiene apodos'}</h4>
                    <div className="CharacterDetail_info">
                        <p>Status: <span>{character.alive ? "alive 🪄" : "dead 💀"}</span></p>
                        <p>Species: <span>{character.species}</span></p>
                        <p>Gender: <span>{character.gender}</span></p>
                        <p>House: <span>{character.house}</span></p>
                    </div>
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