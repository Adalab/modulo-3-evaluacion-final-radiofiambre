import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
import Display from './Display';
import Form from './filter/Form';
import Header from './Header';
import getDataFromApi from '../services/getDataFromApi';
import CharacterDetail from './CharacterDetail';
import PageNotFound from './PageNotFound';

function App() {

  const [characterList, setCharacterList] = useState([])
  const [name, setName] = useState('')
  const [house, setHouse] = useState('gryffindor')
  const [characterNotFoundMessage, setCharacterNotFoundMessage] = useState('')

  
  // COGER DATOS DE LA API Y ORDENAR POR NAME
  useEffect(() => {
    getDataFromApi()
      .then((apiCharacters) => apiCharacters.sort((a, b) => a.name.localeCompare(b.name)))
      .then(setCharacterList)
  }, []);

  
  // ARRAY FILTERCHARACTERS QUE FILTRA POR NOMBRE Y POR CASA
  const filterCharacter = characterList
    .filter((character) => character.name.toLowerCase().includes(name))
    .filter((character) => character.house.toLowerCase() === house)
  
  
  // LANZAR MENSAJE DE PERSONAJE NO ENCONTRADO
  useEffect(() => {
    if (name && filterCharacter.length === 0) {
      setCharacterNotFoundMessage(`Oh, no! The crystal ball can't find this character`);
    } else {
      setCharacterNotFoundMessage(''); // Limpiar mensaje si hay resultados
    }
  }, [name, filterCharacter]); // Solo vuelve a ejecutarse cuando name o filterCharacter cambian
  

  // // PASAR INFO SEGÚN ID/URL(:characterId)
  const { pathname } = useLocation()
  const routeData = matchPath("/character-detail/:characterId", pathname)
  const characterIdUrl = routeData ? routeData.params.characterId : "";
  const characterInfo = characterList.find(character => character.id === characterIdUrl)

  return (
    <>
    <Header />
    <Routes>
      <Route 
        path="/" element={
          <>
            <Form name={name} setName={setName} house={house} setHouse={setHouse} characterNotFoundMessage={characterNotFoundMessage} setCharacterNotFoundMessage={setCharacterNotFoundMessage} />
            <Display characterList={filterCharacter}/>
          </>
        } 
      />
      <Route path="/character-detail/:characterId" element={<CharacterDetail characterInfo={characterInfo}/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </>
  );
}

export default App;