import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss'
import { Container, Nav } from 'react-bootstrap'
import { Github, Linkedin, Twitter } from "react-bootstrap-icons";
import { TryHackMeIcon, CodewarsIcon } from './Components/icons/Icons';

function App() {

  return (
    <>
      <header id="header">
        <Container>
          <h1><a href='/my-portfolio/'>Ivan Mejico</a></h1>
          <h2>I'm a passionate <span>web developer</span></h2>
          
          <Nav id="navbar" className="navbar">
            <Nav.Item><Nav.Link>Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>Resume</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>Services</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>Portfolio</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>Contact</Nav.Link></Nav.Item>
          </Nav>

          <div className="social-links">
            <a href="https://twitter.com/ivanwritescode" target="_blank"><Twitter /></a>
            <a href="https://github.com/ivanwritescode" target="_blank"><Github /></a>
            <a href="https://linkedin.com/in/ivan-mejico" target="_blank"><Linkedin /></a>
            <a href="https://tryhackme.com/p/Nemos" target="_blank"><TryHackMeIcon /></a>
            <a href="https://www.codewars.com/users/ivanwritescode" target="_blank"><CodewarsIcon /></a>
          </div>
        </Container>
      </header>
    </>
  )
}

export default App
