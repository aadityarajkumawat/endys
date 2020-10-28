import { firestore } from "./config";
import { DocData } from "../components/PizzaItem/PizzaItem";
import addItemToFirestore from "./addItemToFirestore";

const addToCart = (
  setEventOn: React.Dispatch<React.SetStateAction<boolean>>,
  name: string,
  price: string,
  switchCartRipple: (s: boolean) => void,
  collectionName: string
) => {
  switchCartRipple(true);
  setEventOn(true);
  if (collectionName !== "") {
    firestore
      .collection(collectionName)
      .doc(name)
      .get()
      .then((doc) => {
        let temp: DocData = { name: "", price: "", quantity: 0 };
        if (doc.data()) {
          temp.name = doc.data()?.name;
          temp.price = doc.data()?.price;
          temp.quantity = doc.data()?.quantity + 1;
        } else {
          temp.name = name;
          temp.price = price;
          temp.quantity = 1;
        }
        addItemToFirestore(temp, name, setEventOn, collectionName);
      });
  }
  setTimeout(() => {
    switchCartRipple(false);
  }, 500);
};

export default addToCart;
