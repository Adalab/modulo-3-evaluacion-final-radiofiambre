function getDataFromApi() {
    return fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then((data) => {
        const cleanData = data.map((character) => {
            return {
                id: character.id,
                name: character.name,
                photo: character.image,
                species: character.species,
                house: character.house,
                alive: character.alive,
                alternateNames: character.alternate_names
            }
        })
        return cleanData;
    })
}

export default getDataFromApi;