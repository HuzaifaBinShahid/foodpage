import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CategoriesProps {
  setSelectedCategory: (category: string | null) => void;
}

interface Category {
  id: string;
  name: string;
}

const Categories: React.FC<CategoriesProps> = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          'https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/aaffe99bfa0f5d46d17b3715a3c16a1d83527db1/categories.json'
        );
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section id="categories">
      <div className="categories-container">
        <button onClick={() => setSelectedCategory(null)}>All</button>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}

      </div>
    </section>
  );
};

export default Categories;
