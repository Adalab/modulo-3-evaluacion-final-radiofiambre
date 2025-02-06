import PropTypes from 'prop-types';

function FilterByName({name, setName, characterNotFoundMessage}) {
  
    const handleInput = (event) => {
      setName(event.target.value.toLowerCase())
    }
  
  return (
    <div className="Filter_container">
      <label htmlFor="">Search by name:</label>
      <input type="text" value={name} placeholder='Type here...' onChange={handleInput}/> 
      <p className='Filter_notFound'>{characterNotFoundMessage}<span>🔮</span></p>
    </div>
  )
}

FilterByName.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  characterNotFoundMessage: PropTypes.string
}

export default FilterByName