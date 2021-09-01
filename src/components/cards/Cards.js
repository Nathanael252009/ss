import React from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, buyItem } from "../../redux/cardsSlice";

function Cards() {
  const dispatch = useDispatch();
  const myitems = useSelector((state) => state.cards.items);
  const myReceipts = useSelector((state) => state.cards.receiptItems);

  const handleBuyItem = (item, targetvalue) => {
    const id = item.id;
    const price = item.price;

    if (targetvalue) {
      targetvalue = targetvalue;
    } else {
      targetvalue = item.quantity + 1;
    }

    dispatch(buyItem({ id, price, targetvalue }));
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
            <button className={styles.sellBtn} disabled={!item.anyBuyed}>
              Sell
            </button>
            <input
              className={styles.priceInput}
              type="number"
              value={item.quantity}
              onChange={(e) => handleBuyItem(item, e.target.value)}
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
