import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Display from './Display';
import Form from './filter/Form';
import Header from './Header';
import getDataFromApi from '../services/getDataFromApi';

function App() {

  const [characterList, setCharacterList] = useState([])
  const [searchByName, setSearchByName] = useState('')
  const [searchByHouse, setSearchByHouse] = useState('gryffindor')

  useEffect(() => {
    getDataFromApi()
      .then((apiCharacters) => apiCharacters.sort((a, b) => a.name.localeCompare(b.name)))
      .then(setCharacterList)
  }, []);

  const filterCharacter = characterList
    .filter((character) => character.name.toLowerCase().includes(searchByName))
    .filter((character) => character.house.toLowerCase() === searchByHouse)

  return (
    <>
      <Header/>
      <Form setSearchByName={setSearchByName} setSearchByHouse={setSearchByHouse}/>
      <Display characterList={filterCharacter}/>
    </>
  );
}

export default App;