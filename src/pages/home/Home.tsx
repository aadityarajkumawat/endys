import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actionTypesCart } from "../../actions/page/Page";
import * as MyTypes from "MyTypes";

interface Props {
  removeCart: () => object;
}

const Home: React.FC<Props> = ({ removeCart }) => {
  useEffect(() => {
    removeCart();
  }, []);

  const log = () => {
    console.log("clicked");
  };
  return (
    <div className="home flex justify-c align-c flex-dir-col">
      <div className="landing flex justify-c align-c flex-dir-col">
        <div className="cap">Yummy pizzas delivered fast and fresh</div>
        <button className="order-now-btn" onClick={log}>
          Order Now
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  removeCart: () => dispatch({ type: actionTypesCart.REMOVE_CART }),
});

export default connect(null, mapDispatchToProps)(Home);
