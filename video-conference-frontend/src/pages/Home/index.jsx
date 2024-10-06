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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      clients: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <AuthLayout>
          <Header />
          <Container>
            <h3 className="my-5 text-center">Kullanıcı Listesi</h3>
            <Col md={12} className="mt-5">
              <ListGroup>
                <ListGroup.Item>bzo</ListGroup.Item>
                <ListGroup.Item>bzo</ListGroup.Item>
                <ListGroup.Item>bzo</ListGroup.Item>
                <ListGroup.Item>bzo</ListGroup.Item>
              </ListGroup>
            </Col>
          </Container>
        </AuthLayout>
      </>
    );
  }
}

export default withRouter(inject("AuthStore")(observer(Home)));
