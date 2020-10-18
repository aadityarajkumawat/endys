import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actionTypesCart } from "../../actions/page/Page";
import * as MyTypes from "MyTypes";
import PizzaItem from "../../components/PizzaItem/PizzaItem";
import { firestore } from "../../firebase/config";
import { pizzaNameParser } from "../../components/PizzaItem/pizzaNameParser";

interface Props {
  showCart: () => object;
  pizzaNameParser: (s: string) => string;
}

export interface Pizza {
  name: string;
  price: string;
  imgUrl: string;
}

const MenuContainer: React.FC<Props> = ({ showCart, pizzaNameParser }) => {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    showCart();
    firestore
      .collection("pizza")
      .get()
      .then((doc) => {
        doc.forEach((doo) => {
          let temp: Pizza = { name: "", price: "", imgUrl: "" };
          temp.name = doo.data().name;
          temp.price = doo.data().price;
          temp.imgUrl = doo.data().imgUrl;
          temp.name = pizzaNameParser(temp.name);
          setPizzas((prev) => [...prev, temp]);
        });
      });
  }, []);

  return (
    <div className="menu-container flex justify-s align-c flex-dir-col">
      <div className="page-type">Menu</div>
      <div className="pizzas-container">
        <div className="pizzas-list">
          {pizzas.map((pizza) => {
            return (
              <PizzaItem
                key={pizza.price}
                name={pizza.name}
                url={pizza.imgUrl}
                price={pizza.price}
              />
            );
          })}
          {pizzas.length === 0 && (
            <Fragment>
              <PizzaItem name="" />
              <PizzaItem name="" />
              <PizzaItem name="" />
              <PizzaItem name="" />
              <PizzaItem name="" />
              <PizzaItem name="" />
              <PizzaItem name="" />
              <PizzaItem name="" />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  showCart: () => dispatch({ type: actionTypesCart.SHOW_CART }),
  pizzaNameParser
});

export default connect(null, mapDispatchToProps)(MenuContainer);
