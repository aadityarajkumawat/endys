import React, { useState, useEffect } from "react";
import { NavFields } from "../../components/fields/NavFields";
import getCartItems from "../../firebase/getCartItems";
import { CartHeader } from "./cart-componentsi/CartHeader";
import CartItems from "./cart-componentsi/CartItems";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { FormI } from "../../components/login/LoginPopup";

interface Props {
  user: FormI;
}

export interface PizzaII {
  name: string;
  quantity: number;
  price: string;
  id: string;
}

const Cart: React.FC<Props> = ({ user }) => {
  const [cartItems, setCartItems] = useState<Array<PizzaII>>([]);

  useEffect(() => {
    getCartItems(setCartItems, user.phone);
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-it">
        <CartHeader collectionName={user.phone} />
        <NavFields />
        <CartItems cartItems={cartItems} user={user} />
      </div>
    </div>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  user: store.user,
});

export default connect(mapStateToProps, null)(Cart);
