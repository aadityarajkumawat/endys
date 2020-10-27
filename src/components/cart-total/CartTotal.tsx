import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/config";

interface Props {}

const CartTotal: React.FC<Props> = () => {
  const [totalBill, setTotalBill] = useState<number>(0);
  useEffect(() => {
    firestore.collection("cart").onSnapshot((snaps) => {
      setTotalBill(0);
      snaps.forEach((snap) => {
        console.log(snap.data());
        setTotalBill((prev) => {
          return prev + snap.data().quantity * Number(snap.data().price);
        });
      });
    });
  }, []);
  return <div>Total Bill: {totalBill} INR</div>;
};

export default CartTotal;
