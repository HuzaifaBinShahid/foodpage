// Importing Styles File
import styles from './ItemCard.module.css';

// Importing packages for Icon use
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface ItemCardProps {
  ImgSrc: string;
  name: string;
  rating: number;
  time: string; 
}

const ItemCard: React.FC<ItemCardProps> = ({ ImgSrc, name, rating, time }) => {
  return (
    <section id="itemcard">
      <div className={styles.itemContainer}>
        <div className={styles.itemContent}>
          <img src={ImgSrc} alt="item" className={styles.itemImg} />
          <p>{name}</p>
          <div className={styles.ratings}>
            <span> <FontAwesomeIcon icon={faStar}/>  {rating}</span>
            <span>{time} mins</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemCard;
