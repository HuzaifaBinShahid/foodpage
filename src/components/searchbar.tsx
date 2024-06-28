import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <section id="searchbar">
        <div className="search-container">
            <span className='search-icon'><FontAwesomeIcon icon = {faSearch}/></span>
            <input type="text" placeholder="Enter restaurant name..." className="search-bar" />
        </div>
    </section>
  )
}

export default SearchBar