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
      <FilterByName setSearchByName={props.setSearchByName}/>
      <FilterByHouse setSearchByHouse={props.setSearchByHouse}/>
    </form>
  )
}

Filters.propTypes = {
  setSearchByName: PropTypes.func,
  setSearchByHouse: PropTypes.func
}

export default Filters