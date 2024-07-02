import React, { useEffect, useState } from 'react';
import axios from 'axios';

// props to be sent to main app to interact and relate to items component
interface CategoriesProps {
  setSelectedCategory: (category: string | null) => void;
}

// required things from api to display them
interface Category {
  id: string;
  name: string;
}

const Categories: React.FC<CategoriesProps> = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          'https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/33cd31ce75ba72a809d48944463b53b74b9ccae8/categories.json'
        );
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId: string | null) => {
    setSelectedCategoryId(categoryId);
    if (categoryId === null) {
      setSelectedCategory(null);
    } else {
      const selectedCategory = categories.find(cat => cat.id === categoryId);
      setSelectedCategory(selectedCategory ? selectedCategory.name.toLowerCase() : null);
    }
  };

  return (
    <section id="categories">
      <div className="categories-container">
        <button // For mixed categories
          className={selectedCategoryId === null ? 'selected' : ''} 
          onClick={() => handleCategoryClick(null)}
        >
          All 
        </button>
        {categories.map((category) => ( // Type of category clicked
          <button
            key={category.id}
            className={selectedCategoryId === category.id ? 'selected' : ''}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
