import gryffindorEmblem from '../images/gryffindor.png'
import hufflepuffEmblem from '../images/hufflepuff.png'
import ravenclawEmblem from '../images/ravenclaw.png'
import slytherinEmblem from '../images/slytherin.png'

function getDataFromApi() {
    return fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then((data) => {
        const cleanData = data.map((character) => {
            let houseEmblem = ""
            
            if (character.house.toLowerCase() === "gryffindor") {
                houseEmblem = gryffindorEmblem;
                } else if (character.house.toLowerCase() === "hufflepuff") {
                houseEmblem = hufflepuffEmblem;
                } else if (character.house.toLowerCase() === "ravenclaw") {
                houseEmblem = ravenclawEmblem;
                } else if (character.house.toLowerCase() === "slytherin") {
                houseEmblem = slytherinEmblem;
                } else {
                houseEmblem = "";
                }
            
            return {
                id: character.id,
                name: character.name,
                photo: character.image || `https://placehold.co/310x395/000000/777777/jpeg?font=playfair-display&text=${character.name}`,
                species: character.species,
                house: character.house,
                houseEmblem: houseEmblem,
                alive: character.alive,
                gender: character.gender,
                alternateNames: character.alternate_names
            }
        })
        return cleanData;
    })
}

export default getDataFromApi;