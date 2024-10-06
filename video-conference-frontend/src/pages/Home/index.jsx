import React from "react";
import Header from "../../Components/Common/Header";
import { inject, observer } from "mobx-react";
import withRouter from "../../withRouter";
import AuthLayout from "../../Components/Layout/AuthLayout";

function Home() {
  return (
    <>
      <AuthLayout>
        <Header />
        Home
      </AuthLayout>
    </>
  );
}

export default withRouter(inject("AuthStore")(observer(Home)));
