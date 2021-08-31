import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Receipt() {
  const receiptItems = useSelector((state) => state.cards.receiptItems);
  const total = useSelector((state) => state.cards.totalReceipt);

  return (
    <div className={styles.receiptContainerDiv}>
      <h2>Your Receipt</h2>
      {receiptItems.map((item) => (
        <p className={styles.receiptItemInfo}>
          <span className={styles.receiptItemTitle}>{item.title}</span>
          <span className={styles.receiptItemQuantity}>x{item.quantity}</span>
          <span className={styles.receiptItemPrice}>
            $
            {Number(item.price * item.quantity)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </span>
        </p>
      ))}
      <p className={styles.totalContainer}>
        <span>Total:</span>
        <span>${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
      </p>
    </div>
  );
}

export default Receipt;
