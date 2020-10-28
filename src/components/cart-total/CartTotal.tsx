import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/config";

interface Props {
  collectionName: string;
}

const CartTotal: React.FC<Props> = ({ collectionName }) => {
  const [totalBill, setTotalBill] = useState<number>(0);
  useEffect(() => {
    if (collectionName !== "") {
      firestore.collection(collectionName).onSnapshot((snaps) => {
        setTotalBill(0);
        snaps.forEach((snap) => {
          console.log(snap.data());
          setTotalBill((prev) => {
            return prev + snap.data().quantity * Number(snap.data().price);
          });
        });
      });
    }
  }, []);
  return <div>Total Bill: {totalBill} INR</div>;
};

export default CartTotal;
