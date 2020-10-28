import { firestore } from "./config";
import deleteItem from "./deleteItem";

const removeItem = (
  fieldName: string,
  setEve: React.Dispatch<React.SetStateAction<boolean>>,
  collectionName: string
) => {
  setEve(true);
  if (collectionName !== "") {
    firestore
      .collection(collectionName)
      .where("name", "==", fieldName)
      .get()
      .then((snaps) => {
        snaps.forEach((snap) => {
          deleteItem(snap.id, setEve, collectionName);
        });
      })
      .catch(() => {
        console.log("Error in retriving data");
      });
  }
};

export default removeItem;
