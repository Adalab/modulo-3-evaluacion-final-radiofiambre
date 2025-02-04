import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Display from './Display';
import Filters from './Filter/Filters';
import Header from './Header';
import getDataFromApi from '../services/getDataFromApi';

function App() {

  const [characterList, setCharacterList] = useState([]) // array de personajes

  useEffect(() => {
    getDataFromApi().then((apiCharacters) => {setCharacterList(apiCharacters)})
  }, [])

  return (
    <>
      <Header/>
      <Filters/>
      <Display characterList={characterList}/>
    </>
  );
}

export default App;