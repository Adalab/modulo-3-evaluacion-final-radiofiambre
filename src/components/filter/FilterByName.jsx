import PropTypes from 'prop-types';

function FilterByName({setSearchByName, characterNotFoundMessage}) {
  
    const handleInput = (event) => {
      setSearchByName(event.target.value.toLowerCase())
    }
  
  return (
    <div className="Filter">
      <label htmlFor="">Search by name</label>
      <input type="text" onChange={handleInput}/>
      <p>{characterNotFoundMessage}</p>
    </div>
  )
}

FilterByName.propTypes = {
  setSearchByName: PropTypes.func,
  characterNotFoundMessage: PropTypes.string
}

export default FilterByName