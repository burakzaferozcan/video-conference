import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">webRTC</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Anasayfa</Nav.Link>
          <Nav.Link href="#features">Giriş Yap</Nav.Link>
          <Nav.Link href="#pricing">Kayıt Ol</Nav.Link>
        </Nav>
      </Navbar>
      <AppRouter />
    </>
  );
}

export default App;
