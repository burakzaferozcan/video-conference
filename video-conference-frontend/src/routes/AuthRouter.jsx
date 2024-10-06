import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Logout from "../pages/Logout";
import withRouter from "../withRouter";
import { inject, observer } from "mobx-react";

class AuthRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/logout"} element={<Logout />} />
      </Routes>
    );
  }
}

export default withRouter(inject("AuthStore")(observer(AuthRouter)));
