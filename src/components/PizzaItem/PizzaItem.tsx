import React, { useState } from "react";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { Cart } from "../../reducers/Cart";
import addToCart from "../../firebase/addToCart";
import { AddToCart, PName, PPrice, PizzaI } from "./pizzaItemStyled.styles";
import { GenericItemPlaceholder } from "./pizza-item-placeholders/GenericItemPlaceholder";
import { FormI } from "../login/LoginPopup";
import { Dispatch } from "redux";
import { actionTypesRipple } from "../../actions/cart/Cart";
import { actionTypesUser } from "../../actions/user/User";
import { actionTypesLogin } from "../../actions/login/Login";

interface Props {
  switchCartRipple: (s: boolean) => void;
  cart: Cart;
  url?: string;
  name: string;
  price: string;
  user: FormI;
  mountPopup: () => object;
}

export interface DocData {
  name: string;
  price: string;
  quantity: number;
}

const PizzaItem: React.FC<Props> = ({
  url,
  name,
  price,
  switchCartRipple,
  user,
  mountPopup,
}) => {
  const [eventOn, setEventOn] = useState<boolean>(false);

  return (
    <PizzaI>
      {url ? (
        <img src={url} className="p-img"></img>
      ) : (
        <GenericItemPlaceholder holderType="image" />
      )}
      {name ? (
        <PName>{name}</PName>
      ) : (
        <GenericItemPlaceholder holderType="name" />
      )}
      {price ? (
        <PPrice>{price} INR</PPrice>
      ) : (
        <GenericItemPlaceholder holderType="price" />
      )}
      <AddToCart
        onClick={() =>
         user.phone && localStorage.getItem("userinfo")
            ? addToCart(setEventOn, name, price, switchCartRipple, user.phone)
            : mountPopup()
        }
        disabled={eventOn}
      >
        {name && "Add to cart"}
      </AddToCart>
    </PizzaI>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    cart: store.cart,
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  switchCartRipple: (s: boolean) =>
    dispatch({
      type: s ? actionTypesRipple.RIPPLE_ON : actionTypesRipple.RIPPLE_OFF,
      payload: s,
    }),
  emitUser: (user: FormI) =>
    dispatch({ type: actionTypesUser.EMIT_USER, payload: user }),
  mountPopup: () => dispatch({ type: actionTypesLogin.MOUNT_POPUP }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaItem)
