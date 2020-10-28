import { firestore } from "../firebase/config";

const cartCountUpdater = (
  setCartCount: React.Dispatch<React.SetStateAction<number>>,
  collectionName: string
) => {
  if (collectionName !== "") {
    firestore.collection(collectionName).onSnapshot((snaps) => {
      setCartCount(0);
      snaps.forEach((snap) => {
        setCartCount((prev) => {
          return Number(prev) + Number(snap.data().quantity);
        });
      });
    });
  }
};

export default cartCountUpdater;
