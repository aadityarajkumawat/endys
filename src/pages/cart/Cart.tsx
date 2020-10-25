import React, { useState, useEffect } from "react";
import { CartItem } from "../../components/cart-item/CartItem";
import { firestore } from "../../firebase/config";

interface Props {}

interface PizzaII {
  name: string;
  quantity: number;
  price: string;
}

const Cart: React.FC<Props> = () => {
  const [cartItems, setCartItems] = useState<Array<PizzaII>>([]);

  useEffect(() => {
    firestore.collection("cart").onSnapshot((snaps) => {
      setCartItems([]);
      snaps.forEach((doc) => {
        const temp: PizzaII = { name: "", price: "", quantity: 0 };
        temp.name = doc.data().name;
        temp.price = doc.data().price;
        temp.quantity = Number(doc.data().quantity);
        setCartItems((prev) => [...prev, temp]);
      });
    });
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-it">
        <div className="top-section">
          <h1>Items in Cart</h1>
          <button>Checkout</button>
        </div>
        <div className="fields">
          <ul>
            <li>S.No.</li>
            <li>Name</li>
            <li>Quantity</li>
            <li>Price</li>
          </ul>
        </div>
        <div className="cart-items">
          {cartItems.map((items) => (
            <CartItem
              name={items.name}
              quantity={items.quantity}
              price={items.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
