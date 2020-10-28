import React, { Fragment } from "react";
import { Pizza } from "./MenuContainer";
import PizzaItem from "../../components/PizzaItem/PizzaItem";

interface Props {
  pizzas: Array<Pizza>;
}

export const PizzaList: React.FC<Props> = ({ pizzas }) => {
  const placeholderItems = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
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
          {placeholderItems.map((_, index) => (
            <PizzaItem name="" price="" key={index} />
          ))}
        </Fragment>
      )}
    </div>
  );
};
