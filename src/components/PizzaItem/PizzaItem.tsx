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

const PizzaItem: React.FC<Props> = ({
  cart,
  url,
  name,
  price,
  incCartCount,
  switchCartRipple,
}) => {
  const [num, setNum] = useState<{ quan: number; _id: string }>({
    quan: 1,
    _id: "",
  });

  const combinedFunction = (cartCount: number, cartRipple: boolean) => {
    incCartCount(cartCount);
    switchCartRipple(cartRipple);

    // Checking if it already exist
    firestore
      .collection("cart")
      .where("name", "==", name)
      .get()
      .then((snaps) => {
        snaps.forEach((snap) => {
          setNum({ quan: snap.data().quantity + 1, _id: snap.id });
        });
      })
      .catch(() => {
        setNum({ quan: 1, _id: "" });
      });

    // If already exist incerease the quantity
    // Else add a new pizza record
    if (num.quan > 1) {
      firestore.collection("cart").doc(num._id).set({
        name: name,
        price: price,
        quantity: num.quan,
      });
    } else {
      firestore
        .collection("cart")
        .add({ name: name, price: price, quantity: num.quan })
        .then((docRef) => {
          console.log("Inserted", docRef.id);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }

    setTimeout(() => {
      switchCartRipple(false);
    }, 500);
  };

  return (
    <PizzaI>
      <img src={url} className="p-img"></img>
      <PName>{name}</PName>
      <PPrice>{price} INR</PPrice>
      <AddToCart onClick={() => combinedFunction(cart.cartCount, true)}>
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
  background-color: #476539;
  color: #fff;
  margin-top: 8px;
  cursor: pointer;
`;

const mapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    cart: store.cart,
  };
};

export default connect(mapStateToProps, { incCartCount, switchCartRipple })(
  PizzaItem
);
