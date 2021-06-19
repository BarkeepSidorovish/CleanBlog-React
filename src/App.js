import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Articles from './components/Articles.js';


function App() {
  return (
    <Router>
      <header>
        <Navbar bg='primary' expand="lg">
          <Container>
            <Navbar.Brand href="#home">Clean Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#link">ABOUT</Nav.Link>
                <Nav.Link href="#home">SAMPLE POST</Nav.Link>
                <Nav.Link href="#link">CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="header_content">

          <h1 className="header_title">Clean Blog</h1>

          <h2 className="header_subtitle">Man must explore, and this is exploration at its greatest</h2>
        </div>
      </header>
      <main className="main-content">
        <Switch>
          <Route path="/" component={Articles} />
        </Switch>
      </main>
      <footer>
        <p>&copy; Copyright - Sakayase</p>
      </footer>
    </Router>
  );
}

export default App;
