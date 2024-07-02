import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../commonViews/ItemCard";


// items thigs required to be fetched
interface Item {
  id: string;
  name: string;
  rating: number;
  isNew: boolean;
  minCookTime: number;
  maxCookTime: number;
  imageUrl: string;
  categoryId: string;
}

// taking array for the response from api
interface ApiResponse {
  foods: Item[];
}

// fetch categories to replate with items displayed
interface Category {
  id: string;
  name: string;
}

interface ItemsProps {
  searchQuery: string;
  selectedCategory: string | null;
}

const Items: React.FC<ItemsProps> = ({ searchQuery, selectedCategory }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(9); // Initial number of visible items before clicking show more button
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Fetch data from Gist API
        const response = await axios.get<ApiResponse>(
          "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/f1b04f9afe0fcc0c9270cb486b927641b7d27436/food.json"
        );
        const data = response.data.foods;

        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await axios.get<Category[]>(
          "https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/33cd31ce75ba72a809d48944463b53b74b9ccae8/categories.json" 
        );
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchItems();
    fetchCategories();
  }, []);

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 9);
  };

  const filteredItems = items.filter(item => {
    const itemCategory = categories.find(cat => cat.id === item.categoryId)?.name.toLowerCase(); // made lower case to match with the names in items api images link response
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? itemCategory === selectedCategory.toLowerCase() : true)
    );
  });

  return (
    <section id="items">
      <div className="items-container">
        {filteredItems.slice(0, visibleItems).map(item => (
          <ItemCard
            key={item.id}
            ImgSrc={item.imageUrl}
            name={item.name}
            rating={parseFloat(item.rating.toFixed(1))}
            time={`${item.minCookTime}-${item.maxCookTime}`}
          />
        ))}
      </div>
      {visibleItems < filteredItems.length && ( // when clicked on show more button the visible items will increase
        <div className="show-btn">
          <button className="showmore" onClick={handleShowMore}>
            + Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Items;
