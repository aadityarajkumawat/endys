import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actionTypesCart } from "../../actions/page/Page";
import * as MyTypes from "MyTypes";
import PizzaItem from "../../components/PizzaItem/PizzaItem";

interface Props {
  showCart: () => object;
}

const MenuContainer: React.FC<Props> = ({ showCart }) => {
  useEffect(() => {
    showCart();
  }, []);

  return (
    <div className="menu-container flex justify-s align-c flex-dir-col">
      <div className="page-type">Menu</div>
      <div className="pizzas-container">
        <div className="pizzas-list">
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  showCart: () => dispatch({ type: actionTypesCart.SHOW_CART }),
});

export default connect(null, mapDispatchToProps)(MenuContainer);
