import React, { useState, useEffect } from "react";
import { NavFields } from "../../components/fields/NavFields";
import getCartItems from "../../firebase/getCartItems";
import { CartHeader } from "./cart-componentsi/CartHeader";
import CartItems from "./cart-componentsi/CartItems";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { FormI } from "../../components/login/LoginPopup";
import { Dispatch } from "redux";
import { actionTypesCart } from "../../actions/page/Page";
import { actionTypesUser } from "../../actions/user/User";

interface Props {
  user: FormI;
  showCart: () => object;
  emitUser: (user: FormI) => object;
}

export interface PizzaII {
  name: string;
  quantity: number;
  price: string;
  id: string;
}

const Cart: React.FC<Props> = ({ user, showCart, emitUser }) => {
  const [cartItems, setCartItems] = useState<Array<PizzaII>>([]);

  const getLocalDataString = (): string => {
    // @ts-ignore
    return localStorage.getItem("userinfo") !== null
      ? localStorage.getItem("userinfo")
      : "";
  };

  useEffect(() => {
    showCart();
    if (localStorage.getItem("userinfo") !== null) {
      emitUser(JSON.parse(getLocalDataString()));
      getCartItems(setCartItems, JSON.parse(getLocalDataString()).phone);
    }
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

const mapDispatchProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  showCart: () => dispatch({ type: actionTypesCart.SHOW_CART }),
  emitUser: (user: FormI) =>
    dispatch({ type: actionTypesUser.EMIT_USER, payload: user }),
});

export default connect(mapStateToProps, mapDispatchProps)(Cart);
