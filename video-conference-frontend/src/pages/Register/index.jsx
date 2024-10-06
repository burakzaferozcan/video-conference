import { Component } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../Components/Common/Header";
import { Formik } from "formik";
import * as Yup from "yup";
import withRouter from "../../withRouter";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Notification from "../../RestAPI/Notification";

class Register extends Component {
  constructor(props) {
    super(props);
  }
  _handleSubmit = (values, { resetForm, setSubmitting }) => {
    const { navigate } = this.props;
    RestClient.postRequest(AppUrl.register, values)
      .then((res) => {
        const result = res.data;
        const status = result.status;
        if (status === 201) {
          Notification.success(result);
          navigate("/login");
        } else {
          if (status === 422) {
            Notification.error(result);
            setSubmitting(false);
          } else {
            Notification.error(result);
            setSubmitting(false);
          }
        }
      })
      .catch((e) => {
        Notification.error({
          title: "Hata",
          message: "Bir hata oluştu lütfen daha sonra tekrar deneyiniz.",
        });
      });
  };
  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col md={12}>
              <Card style={{ width: "100%", marginTop: "5rem" }}>
                <Card.Header>Kayıt Ol</Card.Header>
                <Card.Body>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      password: "",
                      password_confirmation: "",
                    }}
                    onSubmit={this._handleSubmit}
                    validationSchema={Yup.object().shape({
                      name: Yup.string().required("Adınız Soyadınız Gerekli"),
                      email: Yup.string()
                        .email("Geçerli Bir E-Mail Adresi Girin")
                        .required("E-Mail Adresi Gerekli"),
                      password: Yup.string()
                        .min(8, "Şifre 8 karakterden az olamaz.")
                        .max(16, "Şifreniz 16 karakterden fazla olamaz.")
                        .required("Şifreniz Gerekli"),
                      password_confirmation: Yup.string()
                        .oneOf(
                          [Yup.ref("password"), null],
                          "Şifreler Uyuşmuyor"
                        )
                        .required("Şifre Tekrarı Gerekli"),
                    })}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isValid,
                      isSubmitting,
                    }) => (
                      <Form>
                        <Form.Group>
                          <Form.Label>Adınız Soyadınız</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Adınız Soyadınız"
                            onChange={handleChange("name")}
                            value={values.name}
                            onBlur={handleBlur}
                            name={"name"}
                          />
                          {errors.name && touched.name && (
                            <div className="text-danger">{errors.name}</div>
                          )}
                        </Form.Group>

                        <Form.Group className={"mt-3"}>
                          <Form.Label>E-Mail Adresiniz</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="E-Mail Adresiniz"
                            onChange={handleChange("email")}
                            value={values.email}
                            onBlur={handleBlur}
                            name={"email"}
                          />
                          {errors.email && touched.email && (
                            <div className="text-danger">{errors.email}</div>
                          )}
                        </Form.Group>

                        <Form.Group className={"mt-3"}>
                          <Form.Label>Şifreniz</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Şifreniz"
                            onChange={handleChange("password")}
                            value={values.password}
                            onBlur={handleBlur}
                            name={"password"}
                          />
                          {errors.password && touched.password && (
                            <div className="text-danger">{errors.password}</div>
                          )}
                        </Form.Group>

                        <Form.Group className={"mt-3"}>
                          <Form.Label>Şifreniz (Tekrar)</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Şifreniz (Tekrar)"
                            onChange={handleChange("password_confirmation")}
                            value={values.password_confirmation}
                            onBlur={handleBlur}
                            name={"password_confirmation"}
                          />
                          {errors.password_confirmation &&
                            touched.password_confirmation && (
                              <div className="text-danger">
                                {errors.password_confirmation}
                              </div>
                            )}
                        </Form.Group>

                        <Button
                          className={"mt-3"}
                          variant="primary"
                          type="submit"
                          disabled={!isValid || isSubmitting}
                          onClick={handleSubmit}
                        >
                          Kayıt Ol
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Register);
