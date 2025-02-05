import PropTypes from 'prop-types';
import FilterByName from './FilterByName'

function Filters(props) {

  const handleForm = (event) => {
    event.preventDefault();
  }

  return (
    <form onChange={handleForm}>
    <FilterByName setSearchByName={props.setSearchByName}/>
    </form>
  )
}

Filters.propTypes = {
  setSearchByName: PropTypes.func
}

export default Filters