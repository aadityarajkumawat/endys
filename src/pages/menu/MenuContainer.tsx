import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actionTypesCart } from "../../actions/page/Page";
import * as MyTypes from "MyTypes";
import { pizzaNameParser } from "../../components/PizzaItem/pizzaNameParser";
import getMenuItems from "../../firebase/getMenuItems";
import { PizzaList } from "./PizzaList";
import { FormI } from "../../components/login/LoginPopup";
import { actionTypesUser } from "../../actions/user/User";

interface Props {
  showCart: () => object;
  pizzaNameParser: (s: string) => string;
  emitUser: (user: FormI) => object;
}

export interface Pizza {
  name: string;
  price: string;
  imgUrl: string;
}

const MenuContainer: React.FC<Props> = ({ showCart, emitUser }) => {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  const getLocalDataString = (): string => {
    // @ts-ignore
    return localStorage.getItem("userinfo") !== null
      ? localStorage.getItem("userinfo")
      : "";
  }

  useEffect(() => {
    showCart();
    getMenuItems(setPizzas);
    if (localStorage.getItem("userinfo") !== null) {
      emitUser(JSON.parse(getLocalDataString()));
    }
  }, []);

  return (
    <div className="menu-container flex justify-s align-c flex-dir-col">
      <div className="page-type">Menu</div>
      <div className="pizzas-container">
        <PizzaList pizzas={pizzas} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  showCart: () => dispatch({ type: actionTypesCart.SHOW_CART }),
  pizzaNameParser,
  emitUser: (user: FormI) =>
    dispatch({ type: actionTypesUser.EMIT_USER, payload: user }),
});

export default connect(null, mapDispatchToProps)(MenuContainer);
