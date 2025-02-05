import PropTypes from 'prop-types';
import FilterByName from './FilterByName'
import FilterByHouse from './FilterByHouse';
import '../../styles/Form.scss';

function Filters(props) {

  // const handleForm = (event) => {
  //   event.preventDefault();
  // }

  return (
    // <form className="Form_container" onChange={handleForm}>
    <form className="Form_container">
      <FilterByName setSearchByName={props.setSearchByName} characterNotFoundMessage={props.characterNotFoundMessage}/>
      <FilterByHouse setSearchByHouse={props.setSearchByHouse}/>
    </form>
  )
}

Filters.propTypes = {
  setSearchByName: PropTypes.func,
  setSearchByHouse: PropTypes.func,
  characterNotFoundMessage: PropTypes.string
}

export default Filters