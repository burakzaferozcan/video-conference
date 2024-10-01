import React from "react";
import Header from "../../Components/Common/Header";
import { inject, observer } from "mobx-react";
import withRouter from "../../withRouter";

function Home() {
  return (
    <div>
      <Header />
      Home
    </div>
  );
}

export default withRouter(inject("AuthStore")(observer(Home)));
