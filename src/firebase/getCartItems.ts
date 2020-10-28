import { firestore } from "./config";
import { PizzaII } from "../pages/cart/Cart";

const getCartItems = (
  setCartItems: React.Dispatch<React.SetStateAction<PizzaII[]>>,
  collectionName: string
) => {
  if (collectionName !== "") {
    firestore.collection(collectionName).onSnapshot((snaps) => {
      setCartItems([]);
      snaps.forEach((doc) => {
        const temp: PizzaII = { name: "", price: "", quantity: 0, id: "" };
        temp.name = doc.data().name;
        temp.price = doc.data().price;
        temp.quantity = Number(doc.data().quantity);
        temp.id = doc.id;
        setCartItems((prev) => [...prev, temp]);
      });
    });
  }
};

export default getCartItems;
