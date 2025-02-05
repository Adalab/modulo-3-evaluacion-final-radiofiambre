import PropTypes from 'prop-types';

function FilterByName({setSearchByName}) {
  
    const handleInput = (event) => {
        setSearchByName(event.target.value.toLowerCase())
    }
  
  return (
    <>
        <label htmlFor="">Search by name</label>
        <input type="text" onChange={handleInput}/>
    </>
  )
}

FilterByName.propTypes = {
  setSearchByName: PropTypes.func
}

export default FilterByName