import styles from './ItemCard.module.css'

interface ItemCardProps{
  name:string,
  rating:number,
  time:number,
}

const ItemCard:React.FC<ItemCardProps> = ({name,rating,time}) => {
  return (
    <section id="itemcard">
        <div className="item-container">
            <div className="item-content">
               <img src="" alt="" className={styles.itemImg}/>
               <p></p>
               <div className={styles.ratings}>
               <span>{name}</span>
               <span>{rating}</span>
               <span>{time}</span>
               </div>
          
            </div>
        </div>
    </section>
  )
}

export default ItemCard