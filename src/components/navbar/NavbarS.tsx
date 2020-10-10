import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { MenuState } from "../../reducers/Menu";

interface Props {
  menu: MenuState;
}

const NavbarS: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    menu: store.menu,
  };
};

export default connect(mapStateToProps, null)(NavbarS);
