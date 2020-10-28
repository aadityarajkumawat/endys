import { firestore } from "./config";
import deleteItem from "./deleteItem";

const removeItem = (
  fieldName: string,
  setEve: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setEve(true);
  firestore
    .collection("cart")
    .where("name", "==", fieldName)
    .get()
    .then((snaps) => {
      snaps.forEach((snap) => {
        deleteItem(snap.id, setEve);
      });
    })
    .catch(() => {
      console.log("Error in retriving data");
    });
};

export default removeItem;
