import { firestore } from "../firebase/config";

const cartCountUpdater = (
  setCartCount: React.Dispatch<React.SetStateAction<number>>
) => {
  firestore.collection("cart").onSnapshot((snaps) => {
    setCartCount(0);
    snaps.forEach((snap) => {
      setCartCount((prev) => {
        return Number(prev) + Number(snap.data().quantity);
      });
    });
  });
};

export default cartCountUpdater;
