import PropTypes from 'prop-types';
import FilterByName from './FilterByName'
import FilterByHouse from './FilterByHouse';
import '../../styles/Form.scss';

function Filters(props) {

  const handleForm = (event) => {
    event.preventDefault();
  }

  return (
    <form className="Form_container" onChange={handleForm}>
      <FilterByName name={props.name} setName={props.setName} characterNotFoundMessage={props.characterNotFoundMessage}/>
      <FilterByHouse setHouse={props.setHouse}/>
    </form>
  )
}

Filters.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  setHouse: PropTypes.func,
  characterNotFoundMessage: PropTypes.string
}

export default Filters