import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Articles from './components/Articles.js';
import Article from './components/Article';
import Pagination from './components/Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(4);

  useEffect(() => {
      const fetchPosts = async() => {
          setLoading(true);
          const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
          setArticles(res.data);
          setLoading(false);
      }
      fetchPosts();
  }, [])

  // Get current posts
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const setItemsShow = (itemCount) => setArticlesPerPage(itemCount);

    //setItemsShow(itemCount))

  return (
    <Router>
      <header>
        <Navbar bg='primary' expand="lg">
          <Container>
            <Navbar.Brand href="#home">Clean Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="me-auto navlist">
                <Link className="link" to="/">HOME</Link>
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

          <Route exact path="/:id" >
            <Article article={articles} loading={loading} />
          </Route>

          <Route path="/" >
            <Articles articles={currentArticles} loading={loading} />
            <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate} setItemsShow={setItemsShow} />
          </Route>
        </Switch>
      </main>
      <footer>
        <p>&copy; Copyright - Sakayase</p>
      </footer>
    </Router>
  );
}

export default App;
