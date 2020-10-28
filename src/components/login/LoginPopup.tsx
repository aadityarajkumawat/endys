import React, { Fragment, useEffect, useState } from "react";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { Login } from "../../reducers/LoginPop";
import { Dispatch } from "redux";
import { actionTypesLogin } from "../../actions/login/Login";
import { actionTypesUser } from "../../actions/user/User";

interface Props {
  login: Login;
  unmountPopup: () => object;
  emitUser: (user: FormI) => object;
}

export interface FormI {
  name: string;
  phone: string;
  password: string;
}

const LoginPopup: React.FC<Props> = ({ login, unmountPopup, emitUser }) => {
  const removePopup = () => {
    unmountPopup();
  };

  const [formState, setFormState] = useState<FormI>({
    name: "",
    phone: "",
    password: "",
  });

  const [userType, setUserType] = useState<boolean>(false);

  const { name, phone, password } = formState;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const saveInfo = () => {
    if (
      formState.name !== "" &&
      formState.password !== "" &&
      formState.phone !== ""
    ) {
      localStorage.setItem("userinfo", JSON.stringify(formState));
      emitUser(formState);
    }
  };

  useEffect(() => {
    if (login.mounted) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "";
    }
  }, [login.mounted]);

  return (
    <Fragment>
      {login.mounted ? (
        <Fragment>
          <div
            className="backdrop-container flex justify-c align-c"
            onClick={removePopup}
          ></div>
          <div className="login-container flex justify-s align-c flex-dir-col">
            <div>Please fill the details to procees</div>
            <form className="flex flex-dir-col">
              {!userType && (
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={name}
                />
              )}
              <input
                type="phone"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={phone}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={password}
              />
              <button onClick={saveInfo}>
                {!userType ? "Sign Up" : "Login"}
              </button>
            </form>
            <div className="new-user flex align-c justify-c">
              New customer?
              <div onClick={() => setUserType((prev) => !prev)}>
                {userType ? "Sign Up" : "Login"}
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  login: store.login,
});

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  unmountPopup: () => dispatch({ type: actionTypesLogin.UNMOUNT_POPUP }),
  emitUser: (user: FormI) =>
    dispatch({ type: actionTypesUser.EMIT_USER, payload: user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
