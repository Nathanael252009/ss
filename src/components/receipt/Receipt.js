import React from "react";
import { useSelector } from "react-redux";

function Receipt() {
  const receiptItems = useSelector((state) => state.cards.receiptItems);

  return (
    <div>
      <p>Receipt</p>
      <p>{receiptItems}</p>
    </div>
  );
}

export default Receipt;
