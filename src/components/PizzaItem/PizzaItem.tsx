import React, { useState } from "react";
import styled from "styled-components";
import { incCartCount } from "../../actions/cart/cartActions";
import { switchCartRipple } from "../../actions/cart/cartActions";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { Cart } from "../../reducers/Cart";
import { firestore } from "../../firebase/config";

interface Props {
  incCartCount: (count: number) => void;
  switchCartRipple: (s: boolean) => void;
  cart: Cart;
  url?: string;
  name?: string;
  price?: string;
}

interface SS {
  q: number;
  _id: string;
}

const PizzaItem: React.FC<Props> = ({ url, name, price, switchCartRipple }) => {
  const [eventOn, setEventOn] = useState<boolean>(false);
  const [st, setSt] = useState<string>("k");
  const [theId, setTheId] = useState<SS>({ q: 0, _id: "" });

  const combinedFunction = (cartRipple: boolean) => {
    switchCartRipple(cartRipple);
    setEventOn(true);
    // Checking if it already exist
    firestore
      .collection("cart")
      .where("name", "==", name)
      .get()
      .then((snaps) => {
        setSt("o");
        snaps.forEach((snap) => {
          setTheId({ q: snap.data().quantity, _id: snap.id });
        });
      });

    if (st === "o") {
      firestore
        .collection("cart")
        .doc(theId._id)
        .set({
          name: name,
          price: price,
          quantity: theId.q + 1,
        })
        .then(() => {
          setEventOn(false);
        })
        .catch(() => {
          console.log("SMTHNG");
        });
    } else {
      setEventOn(true);
      firestore
        .collection("cart")
        .add({ name: name, price: price, quantity: 1 })
        .then((docRef) => {
          console.log("Inserted", docRef.id);
          setEventOn(false);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }

    // If already exist incerease the quantity
    // Else add a new pizza record

    setTimeout(() => {
      switchCartRipple(false);
    }, 500);
  };

  return (
    <PizzaI>
      <img src={url} className="p-img"></img>
      <PName>{name}</PName>
      <PPrice>{price} INR</PPrice>
      <AddToCart onClick={() => combinedFunction(true)} disabled={eventOn}>
        Add to cart
      </AddToCart>
    </PizzaI>
  );
};

const PizzaI = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 12px;
  background-color: #171717;
  margin: 0 20px;
  margin-top: 80px;
  text-align: center;
  box-shadow: 4px 4px 4px 0px #e2e2e205, -4px 0px 4px 0px #e2e2e205;
`;

const PName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const PPrice = styled.div`
  color: #bcbcbc;
  width: 100%;
  text-align: center;
  margin: 5px 0;
`;

const AddToCart = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 8px;
  color: #fff;
  margin-top: 8px;
  cursor: pointer;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(71, 101, 57, 0.5)" : "#476539"};
`;

const mapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    cart: store.cart,
  };
};

export default connect(mapStateToProps, { incCartCount, switchCartRipple })(
  PizzaItem
);
