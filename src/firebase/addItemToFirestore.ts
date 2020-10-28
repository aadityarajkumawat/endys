import { firestore } from "../firebase/config";
import { DocData } from "../components/PizzaItem/PizzaItem";

const addItemToFirestore = (
  pizzaData: DocData,
  name: string,
  setEve: React.Dispatch<React.SetStateAction<boolean>>
) => {
  firestore
    .collection("cart")
    .doc(name)
    .set({
      name: pizzaData.name,
      price: pizzaData.price,
      quantity: pizzaData.quantity,
    })
    .then(() => {
      console.log("Document Inserted");
      setEve(false);
    })
    .catch(() => {
      console.log("Error uploading document");
      setEve(false);
    });
};

export default addItemToFirestore;
