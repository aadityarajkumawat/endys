import React, { useState } from "react";
import { incCartCount } from "../../actions/cart/cartActions";
import { switchCartRipple } from "../../actions/cart/cartActions";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { Cart } from "../../reducers/Cart";
import addToCart from "../../firebase/addToCart";
import { AddToCart, PName, PPrice, PizzaI } from "./pizzaItemStyled.styles";
import { GenericItemPlaceholder } from "./pizza-item-placeholders/GenericItemPlaceholder";

interface Props {
  incCartCount: (count: number) => void;
  switchCartRipple: (s: boolean) => void;
  cart: Cart;
  url?: string;
  name: string;
  price: string;
}

export interface DocData {
  name: string;
  price: string;
  quantity: number;
}

const PizzaItem: React.FC<Props> = ({ url, name, price, switchCartRipple }) => {
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
        onClick={() => addToCart(setEventOn, name, price, switchCartRipple)}
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
  };
};

export default connect(mapStateToProps, { incCartCount, switchCartRipple })(
  PizzaItem
);
