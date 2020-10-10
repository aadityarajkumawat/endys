import React from "react";
import Logo from "../../img/Logo.svg";
import { ListContainer } from "./ListContainer.styles";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../../actions";
import { MenuState } from "../../reducers/Menu";

interface Props {
  menu: MenuState;
  openMenu: () => object;
  closeMenu: () => object;
}

const Navbar: React.FC<Props> = ({
  menu,
  openMenu,
  closeMenu,
}: Props) => {
  const toggleMenu = () => {
    if (menu.status === "none") {
      openMenu();
    } else {
      closeMenu();
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
          <ListContainer className="list flex" isVisible={menu.status}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ListContainer>
          <div className="ham-menu" onClick={toggleMenu}>
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
  };
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  openMenu: () => dispatch({ type: actionTypes.OPEN_MENU }),
  closeMenu: () => dispatch({ type: actionTypes.CLOSE_MENU }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
