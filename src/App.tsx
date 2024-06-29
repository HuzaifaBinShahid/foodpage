// Importing Hooks
import { useState } from 'react';

// Importing Components
import SearchBar from './components/searchbar'
import Categories from './components/categories'
import Items from './components/items'

// Importing Styles File
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Categories setSelectedCategory={setSelectedCategory} />
      <Items searchQuery={searchQuery} selectedCategory={selectedCategory} />
    </>
  )
}

export default App
