import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Display from './Display';
import Filters from './filter/Filters';
import Header from './Header';
import getDataFromApi from '../services/getDataFromApi';

function App() {

  const [characterList, setCharacterList] = useState([]) // array de personajes
  const [searchByName, setSearchByName] = useState('') // string con un nombre

  useEffect(() => {
    getDataFromApi().then((apiCharacters) => {setCharacterList(apiCharacters)})
  }, [])

  const filterByName = characterList.filter(character => character.name.toLowerCase().includes(searchByName));

  return (
    <>
      <Header/>
      <Filters setSearchByName={setSearchByName}/>
      <Display characterList={filterByName}/>
    </>
  );
}

export default App;