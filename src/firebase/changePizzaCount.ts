import { firestore } from "../firebase/config";
import getUpdatedQuantity from "../helpers/getUpdatedQuantity";

const changePizzaCount = (
  boo: boolean,
  setEve: React.Dispatch<React.SetStateAction<boolean>>,
  price: string,
  quantity: number,
  name: string,
  collectionName: string
) => {
  setEve(true);
  if (collectionName !== "") {
    firestore
      .collection(collectionName)
      .where("name", "==", name)
      .get()
      .then((snaps) => {
        snaps.forEach((snap) => {
          firestore
            .collection(collectionName)
            .doc(snap.id)
            .set({
              name: name,
              price: price,
              quantity: getUpdatedQuantity(boo, quantity),
            });
          setEve(false);
        });
      });
  }
};

export default changePizzaCount;
