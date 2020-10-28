import { firestore } from "./config";

const deleteItem = (
  id: string,
  setEve: React.Dispatch<React.SetStateAction<boolean>>
) => {
  firestore
    .collection("cart")
    .doc(id)
    .delete()
    .then(() => {
      setEve(false);
    })
    .catch((err) => {
      console.error("errorrr", err);
    });
};

export default deleteItem;
