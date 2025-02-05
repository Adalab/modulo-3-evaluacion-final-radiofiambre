import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Display from './Display';
import Form from './filter/Form';
import Header from './Header';
import getDataFromApi from '../services/getDataFromApi';
import CharacterDetail from './CharacterDetail';

function App() {

  const [characterList, setCharacterList] = useState([])
  const [searchByName, setSearchByName] = useState('')
  const [searchByHouse, setSearchByHouse] = useState('gryffindor')
  const [characterNotFoundMessage, setCharacterNotFoundMessage] = useState('')

  useEffect(() => {
    getDataFromApi()
      .then((apiCharacters) => apiCharacters.sort((a, b) => a.name.localeCompare(b.name)))
      .then(setCharacterList)
  }, []);

  const filterCharacter = characterList
    .filter((character) => character.name.toLowerCase().includes(searchByName))
    .filter((character) => character.house.toLowerCase() === searchByHouse)

  // const filterCharacter = characterList
  //   .filter(character => {
  //     if(character.name.toLowerCase().includes(searchByName)) {
  //       return true
  //     } else {
  //       setCharacterNotFoundMessage('No existen personajes con ese nombre');
  //     }
  //   })
  //   .filter((character) => character.house.toLowerCase() === searchByHouse)
  
  const defineDetailInfo = (characterId) => {
    const characterFound = characterList.find(character => character.id === characterId);
    return characterFound;
  }

  return (
    <>
    <Header />
    <Routes>
      <Route 
        path="/" element={
          <>
            <Form setSearchByName={setSearchByName} setSearchByHouse={setSearchByHouse} characterNotFoundMessage={characterNotFoundMessage}/>
            <Display characterList={filterCharacter}/>
          </>
        } 
      />
      <Route path="/character-detail/:characterId" element={<CharacterDetail defineDetailInfo={defineDetailInfo}/>} />
    </Routes>
  </>
  );
}

export default App;