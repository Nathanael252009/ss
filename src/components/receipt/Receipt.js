import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Receipt() {
  const receiptItems = useSelector((state) => state.cards.receiptItems);
  return (
    <div className={styles.receiptContainerDiv}>
      <h2>Your Receipt</h2>
      {receiptItems.map((item) => (
        <p className={styles.receiptItemInfo}>
          <span>{item.title}</span>
          <span>{item.quantity}</span>
          <span>{item.price}</span>
        </p>
      ))}
    </div>
  );
}

export default Receipt;
