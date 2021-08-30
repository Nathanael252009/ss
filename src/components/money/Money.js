import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Money() {
  const moneyvalue = useSelector((state) => state.money.value);
  return (
    <div className={styles.moneyContainer}>
      <p>$ {moneyvalue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
    </div>
  );
}

export default Money;
