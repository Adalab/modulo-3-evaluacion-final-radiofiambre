import PropTypes from 'prop-types';

function FilterByHouse({setSearchByHouse}) {

  const handleSelect = (event) => {
    setSearchByHouse(event.target.value);
  }

  return (
    <div className="Filter">
      <label htmlFor="">Search by house</label>
      <select name="" id="" onChange={handleSelect}>
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>
    </div>
  )
}

FilterByHouse.propTypes = {
  setSearchByHouse: PropTypes.func
}

export default FilterByHouse