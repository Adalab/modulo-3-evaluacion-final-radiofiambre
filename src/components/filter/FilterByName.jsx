import PropTypes from 'prop-types';

function FilterByName({name, setName, characterNotFoundMessage}) {
  
    const handleInput = (event) => {
      event.preventDefault();
      setName(event.target.value.toLowerCase())
    }
  
  return (
    <div className="Filter_container">
      <label htmlFor="">Search by name</label>
      <input type="text" value={name} onChange={handleInput}/>
      {/* he pasado {name} pero tampoco funciona */}
      <p>sss{characterNotFoundMessage}</p>
    </div>
  )
}

FilterByName.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  characterNotFoundMessage: PropTypes.string
}

export default FilterByName