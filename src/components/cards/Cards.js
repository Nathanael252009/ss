import React from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, buyItem } from "../../redux/cardsSlice";

function Cards() {
  const dispatch = useDispatch();
  const myitems = useSelector((state) => state.cards.items);

  const handleChangeQuantity = (id, targetvalue) => {
    dispatch(changeQuantity({ id, targetvalue }));
  };

  const handleBuyItem = (item) => {
    const id = item.id;
    const quantity = item.quantity;
    const price = item.price;
    dispatch(buyItem({ id, quantity, price }));
  };
  return (
    <div className={styles.gridContainer}>
      {myitems.map((item) => (
        <div className={styles.carddiv}>
          <img src={item.img} alt={item.titlei} />
          <p className={styles.cardTitle}>{item.title}</p>
          <p className={styles.cardPrice}>
            $ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </p>
          <div className={styles.buyOptionsDiv}>
            <button className={styles.sellBtn}>Sell</button>
            <input
              className={styles.priceInput}
              type="number"
              value={item.quantity}
              onChange={(e) => handleChangeQuantity(item.id, e.target.value)}
            />
            <button
              className={styles.buyBtn}
              onClick={() => handleBuyItem(item)}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
