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

  componentDidMount() {
    this.getClientList();
  }

  getClientList = () => {
    this.props.AuthStore.getToken();
    const token =
      this.props.AuthStore.appState !== null
        ? this.props.AuthStore.appState.user.access_token
        : null;

    RestClient.getRequest(AppUrl.home, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        const result = res.data;
        const status = res.status;
        if (status === 200) {
          this.setState({
            isLoading: false,
            clients: result.data.clients,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Notification.error({
          title: "Hata",
          message: "Bir Hata Oluştu. Lütfen Daha Sonra Tekrar Deneyiniz",
        });
      });
  };

  clientsRender = (clients) => {
    return clients.map((item, index) => {
      return (
        <ListGroup.Item key={index} as={Link} to={`/video/${item.conn_string}`}>
          {item.name}
        </ListGroup.Item>
      );
    });
  };
  render() {
    const { isLoading, clients } = this.state;
    console.log(clients);
    if (isLoading) {
      return (
        <div className="d-flex justify-content-center align-itens-center vh-100">
          Loading...
        </div>
      );
    }
    return (
      <>
        <AuthLayout>
          <Header />
          <Container>
            <h3 className="my-5 text-center">Kullanıcı Listesi</h3>
            <Col md={12} className="mt-5">
              <ListGroup>
                {clients.length > 0 ? (
                  this.clientsRender(clients)
                ) : (
                  <div className="alert alert-danger text-center">
                    Herhangi bir kullanıcı bulunamadı.
                  </div>
                )}
              </ListGroup>
            </Col>
          </Container>
        </AuthLayout>
      </>
    );
  }
}

export default withRouter(inject("AuthStore")(observer(Home)));
