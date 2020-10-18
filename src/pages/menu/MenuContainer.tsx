import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actionTypesCart } from "../../actions/page/Page";
import * as MyTypes from "MyTypes";
import PizzaItem from "../../components/PizzaItem/PizzaItem";
import { getPizzaz } from "../../firebase/getPizzaz";

interface Props {
  showCart: () => object;
}

export interface Pizza {
  name: string;
  price: string;
  imgUrl: string;
}

const MenuContainer: React.FC<Props> = ({ showCart }) => {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    showCart();
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
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  showCart: () => dispatch({ type: actionTypesCart.SHOW_CART }),
});

export default connect(null, mapDispatchToProps)(MenuContainer);