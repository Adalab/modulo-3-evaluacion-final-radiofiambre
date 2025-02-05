import PropTypes from 'prop-types';

function FilterByHouse({setHouse}) {

  const handleSelect = (event) => {
    setHouse(event.target.value);
  }

  return (
    <div className="Filter_container">
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
  setHouse: PropTypes.func
}

export default FilterByHouse