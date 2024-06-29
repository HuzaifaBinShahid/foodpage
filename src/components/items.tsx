// Importing Hooks
import { useEffect, useState } from "react";

// Importing Components
import ItemCard from "../commonViews/ItemCard";

// Importing Packages
import axios from "axios";

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

interface ItemsProps {
  searchQuery: string;
  selectedCategory: string | null;
}

const Items: React.FC<ItemsProps> = ({ searchQuery, selectedCategory }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(9); // Initial number of visible items

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/ef4e1b48002e5017dd78bbb48a2adf8a97419529/food.json"
        );
        setItems(response.data.foods);
      } catch (error) {
        console.error("Error Fetching Items:" + error);
      }
    };

    fetchItems();
  }, []);

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 9);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory ? item.categoryId === selectedCategory : true)
  );

  return (
    <section id="items">
      <div className="items-container">
        {filteredItems.slice(0, visibleItems).map((item) => (
          <ItemCard
            key={item.id}
            ImgSrc={item.imageUrl}
            name={item.name}
            rating={parseFloat(item.rating.toFixed(1))}
            time={`${item.minCookTime}-${item.maxCookTime}`}
          />
        ))}
      </div>
      {visibleItems < filteredItems.length && (
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
