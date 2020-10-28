import { firestore } from "./config";

const deleteItem = (
  id: string,
  setEve: React.Dispatch<React.SetStateAction<boolean>>,
  collectionName: string
) => {
  if (collectionName !== "") {
    firestore
      .collection(collectionName)
      .doc(id)
      .delete()
      .then(() => {
        setEve(false);
      })
      .catch((err) => {
        console.error("errorrr", err);
      });
  }
};

export default deleteItem;
