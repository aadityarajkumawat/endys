import React, { useState, useEffect } from "react";
import { CartItem } from "../../components/cart-item/CartItem";
import CartTotal from "../../components/cart-total/CartTotal";
import { NavFields } from "../../components/fields/NavFields";
import { firestore } from "../../firebase/config";

interface Props {}

interface PizzaII {
  name: string;
  quantity: number;
  price: string;
  id: string;
}

const Cart: React.FC<Props> = () => {
  const [cartItems, setCartItems] = useState<Array<PizzaII>>([]);

  useEffect(() => {
    firestore.collection("cart").onSnapshot((snaps) => {
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
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-it">
        <div className="top-section">
          <h1>Items in Cart</h1>
          <div className="wrap-billing flex align-c">
            <CartTotal />
            <button>Checkout</button>
          </div>
        </div>
        <NavFields />
        <div className="cart-items">
          {cartItems.map((items, ind) => (
            <CartItem
              index={ind}
              name={items.name}
              quantity={items.quantity}
              price={items.price}
              key={items.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
