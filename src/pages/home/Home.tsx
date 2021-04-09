import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actionTypesCart } from "../../actions/page/Page";
import * as MyTypes from "MyTypes";
import { useHistory } from "react-router";

interface Props {
  removeCart: () => object;
}

const Home: React.FC<Props> = ({ removeCart }) => {
  const history = useHistory();

  useEffect(() => {
    removeCart();
  }, []);

  const goToMenu = () => {
    history.push("/menu");
  };
  return (
    <div className="home flex justify-c align-c flex-dir-col">
      <div className="landing flex justify-c align-c flex-dir-col">
        <div className="cap">Yummy pizzas delivered fast and fresh</div>
        <button className="order-now-btn" onClick={goToMenu}>
          Explore Menu
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  removeCart: () => dispatch({ type: actionTypesCart.REMOVE_CART }),
});

export default connect(null, mapDispatchToProps)(Home);
