import { firestore } from "./config";
import { Pizza } from "../pages/menu/MenuContainer";
import { pizzaNameParser } from "../components/PizzaItem/pizzaNameParser";

const getMenuItems = (
  setPizzas: React.Dispatch<React.SetStateAction<Array<Pizza>>>
) => {
  firestore
    .collection("pizza")
    .get()
    .then((doc) => {
      doc.forEach((doo) => {
        let temp: Pizza = { name: "", price: "", imgUrl: "" };
        temp.name = doo.data().name;
        temp.price = doo.data().price;
        temp.imgUrl = doo.data().imgUrl;
        //* Parse name to display form
        temp.name = pizzaNameParser(temp.name);
        setPizzas((prev) => [...prev, temp]);
      });
    })
    .catch((e) => console.log("eerror:", e.message));
};

export default getMenuItems;
