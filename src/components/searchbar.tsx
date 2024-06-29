// Importing Packages for Icon use
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section id="searchbar">
      <div className="search-container">
        <span className='search-icon'><FontAwesomeIcon icon={faSearch} /></span>
        <input 
          type="text" 
          placeholder="Enter restaurant name..." 
          className="search-bar" 
          onChange={handleInputChange} 
        />
      </div>
    </section>
  )
}

export default SearchBar
