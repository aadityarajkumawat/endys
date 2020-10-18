import { firestore } from "./config";
import { Pizza } from "../pages/menu/MenuContainer";

const getPizzaz = (): Array<Pizza> => {
  let pizzasObject: Array<Pizza> = [];

  firestore
    .collection("pizza")
    .get()
    .then((snap) => {
      snap.forEach((doc) => {
        const temp: Pizza = { name: "", imgUrl: "", price: "" };
        temp.name = doc.data().name;
        temp.imgUrl = doc.data().imgUrl;
        temp.price = doc.data().price;

        pizzasObject.push(temp);
      });
    });

  return pizzasObject;
};

export { getPizzaz };
