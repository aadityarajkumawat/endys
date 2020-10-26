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
  name: string;
  price: string;
}

interface DocData {
  name: string;
  price: string;
  quantity: number;
}

const PizzaItem: React.FC<Props> = ({ url, name, price, switchCartRipple }) => {
  const [eventOn, setEventOn] = useState<boolean>(false);

  const addItemToFirestore = (pizzaData: DocData) => {
    firestore
      .collection("cart")
      .doc(name)
      .set({
        name: pizzaData.name,
        price: pizzaData.price,
        quantity: pizzaData.quantity,
      })
      .then(() => {
        console.log("Document Inserted");
        setEventOn(false);
      })
      .catch(() => {
        console.log("Error uploading document");
        setEventOn(false);
      });
  };

  const combinedFunction = (cartRipple: boolean) => {
    switchCartRipple(cartRipple);
    setEventOn(true);

    firestore
      .collection("cart")
      .doc(name)
      .get()
      .then((doc) => {
        let temp: DocData = { name: "", price: "", quantity: 0 };
        if (doc.data()) {
          temp.name = doc.data()?.name;
          temp.price = doc.data()?.price;
          temp.quantity = doc.data()?.quantity + 1;
        } else {
          temp.name = name;
          temp.price = price;
          temp.quantity = 1;
        }
        addItemToFirestore(temp);
      });

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
  transition: all 0.5s ease;
  box-shadow: 4px 4px 4px 0px #e2e2e205, -4px 0px 4px 0px #e2e2e205;

  @media screen and (max-width: 700px) {
    width: 210px;
    height: 280px;
    margin: 0 10px;
    margin-top: 50px;
  }
`;

const PName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
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
