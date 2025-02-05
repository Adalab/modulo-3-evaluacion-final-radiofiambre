import PropTypes from 'prop-types';
import FilterByName from './FilterByName'
import FilterByHouse from './FilterByHouse';
import '../../styles/Form.scss';

function Filters(props) {

  const handleForm = (event) => {
    event.preventDefault();
  }

  const handleReset = () => {
    props.setName('');
    props.setHouse('gryffindor');
    props.setCharacterNotFoundMessage('');
  }
  
  return (
    <form className="Form_container" onChange={handleForm}>
      <FilterByName name={props.name} setName={props.setName} characterNotFoundMessage={props.characterNotFoundMessage}/>
      <FilterByHouse setHouse={props.setHouse} house={props.house}/>
      <button onClick={handleReset}>🪄 Reset</button>
    </form>
  )
}

Filters.propTypes = {
  name: PropTypes.string,
  house: PropTypes.string,
  setName: PropTypes.func,
  setHouse: PropTypes.func,
  characterNotFoundMessage: PropTypes.string,
  setCharacterNotFoundMessage: PropTypes.func,
}

export default Filters