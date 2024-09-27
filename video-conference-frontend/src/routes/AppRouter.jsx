import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"*"} element={<Navigate to={"/"} />}></Route>
      </Routes>
    );
  }
}

export default AppRouter;
