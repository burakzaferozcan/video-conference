import { Component } from "react";
import Header from "../../Components/Common/Header";
import { inject, observer } from "mobx-react";
import withRouter from "../../withRouter";
import AuthLayout from "../../Components/Layout/AuthLayout";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Notification from "../../RestAPI/Notification";
import { Link } from "react-router-dom";

class Video extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.checkUser();
  }

  checkUser = () => {
    const { navigate, params } = this.props;
  };

  render() {
    return (
      <>
        <AuthLayout>
          <Header />
          <Container>
            <Col md={12} className="mt-5"></Col>
          </Container>
        </AuthLayout>
      </>
    );
  }
}

export default withRouter(inject("AuthStore")(observer(Video)));
