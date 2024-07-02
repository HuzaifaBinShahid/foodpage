// Importing Hooks
import React, { useState } from 'react';

// Importing Components
import SearchBar from './components/searchbar'
import Categories from './components/categories'
import Items from './components/items'

// Importing Styles File
import './App.css'

function App() {

  // These are used to make a relation between the search bar categories and items as the actions in each of them effects the others so wether you can keep all the 
  // code in one file and make it slight easier to understand but in this case the code becomes reusable and you can simply use props for such apps
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
