import React, { useEffect, useState } from "react";
import Logo from "../../img/Logo.svg";
import { ListContainer } from "./ListContainer.styles";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../../actions/menu/Menu";
import { actionTypesCart } from "../../actions/page/Page";
import { MenuState } from "../../reducers/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import { CartShownStatus } from "../../reducers/Page";
import { Cart } from "../../reducers/Cart";
import { CartRipple } from "./CartRipple.styles";
import cartCountUpdater from "../../firebase/cartCountUpdater";
import { actionTypesLogin } from "../../actions/login/Login";
import { FormI } from "../login/LoginPopup";
import { actionTypesUser } from "../../actions/user/User";

interface Props {
  menu: MenuState;
  page: CartShownStatus;
  cart: Cart;
  user: FormI;
  openMenu: () => object;
  closeMenu: () => object;
  removeCart: () => object;
  showCart: () => object;
  mountPopup: () => object;
}

const Navbar: React.FC<Props> = ({
  menu,
  openMenu,
  closeMenu,
  page,
  cart,
  mountPopup,
  user,
}: Props) => {
  const type = useMediaQuery("(max-width: 1300px)");
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    type ? openMenu() : closeMenu();
  }, [type]);

  useEffect(() => {
    cartCountUpdater(setCartCount, user.phone);
  }, [user.phone]);

  const authenticate = () => {
    if (!localStorage.getItem("userinfo")) {
      mountPopup();
    }
  };

  return (
    <div className="navbar-container">
      <nav className="flex justify-sb">
        <div className="logo-section flex justify-c align-c">
          <img src={Logo} alt="Endys Logo" />
          <div className="endys flex flex-dir-col">
            <span className="endys-name">Endys</span>
            <span className="pizza">PIZZA</span>
          </div>
        </div>
        <div className="nav-links flex align-c">
          <ListContainer
            className="list flex"
            isVisible={menu.status}
            typeP={type}
          >
            <li>
              <Link to="/" onClick={() => (type ? openMenu() : closeMenu())}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                onClick={() => (type ? openMenu() : closeMenu())}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link to="#">Order Online</Link>
            </li>
            {!page.cartShown && (
              <li>
                <Link to="#">About</Link>
              </li>
            )}
            {page.cartShown && (
              <li onClick={authenticate}>
                <Link to={localStorage.getItem("userinfo") ? "/cart" : "/menu"}>
                  <CartRipple
                    respondInc={cart.rippleS}
                    className="cart-counter"
                  >
                    {cartCount}
                  </CartRipple>
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            )}
          </ListContainer>
          <div
            className="ham-menu"
            onClick={() => (menu.status === "none" ? openMenu() : closeMenu())}
          >
            <div className="wrapper flex flex-dir-col align-c justify-c">
              <span></span>
              <span className="middle"></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    menu: store.menu,
    page: store.page,
    cart: store.cart,
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  openMenu: () => dispatch({ type: actionTypes.OPEN_MENU }),
  closeMenu: () => dispatch({ type: actionTypes.CLOSE_MENU }),
  showCart: () => dispatch({ type: actionTypesCart.SHOW_CART }),
  removeCart: () => dispatch({ type: actionTypesCart.REMOVE_CART }),
  mountPopup: () => dispatch({ type: actionTypesLogin.MOUNT_POPUP }),
  unmountPopup: () => dispatch({ type: actionTypesLogin.UNMOUNT_POPUP }),
  emitUser: (user: FormI) =>
    dispatch({ type: actionTypesUser.EMIT_USER, payload: user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
