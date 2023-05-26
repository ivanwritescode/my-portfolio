import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss'
import { Container, Nav } from 'react-bootstrap'
import { Github, Linkedin, Twitter } from "react-bootstrap-icons";
import { TryHackMeIcon, CodewarsIcon } from './Components/icons/Icons';

function App() {
  const disabledLinkStyles: React.CSSProperties = {
    pointerEvents: "none",
    cursor: "not-allowed",
    opacity: 0.5,
    textDecoration: 'line-through'
  }

  return (
    <>
      <header id="header">
        <Container>
          <h1><a href='/my-portfolio/'>Ivan Mejico</a></h1>
          <h2>I'm a Computer Engineering graduate passionate about <span>web development</span>.</h2>
          <div className="nav-container">
            <Nav id="navbar" className="navbar">
                <Nav.Item><Nav.Link href="#header">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#about" style={ disabledLinkStyles }>About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#resume" style={ disabledLinkStyles }>Resume</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#services" style={ disabledLinkStyles }>Services</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#portfolio" style={ disabledLinkStyles }>Portfolio</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#contact" style={ disabledLinkStyles }>Contact</Nav.Link></Nav.Item>
            </Nav>
          </div>
          <div className="social-links">
            <Nav.Link href="https://twitter.com/ivanwritescode" target="_blank"><Twitter /></Nav.Link>
            <Nav.Link href="https://github.com/ivanwritescode" target="_blank"><Github /></Nav.Link>
            <Nav.Link href="https://linkedin.com/in/ivan-mejico" target="_blank"><Linkedin /></Nav.Link>
            <Nav.Link href="https://tryhackme.com/p/Nemos" target="_blank"><TryHackMeIcon /></Nav.Link>
            <Nav.Link href="https://www.codewars.com/users/ivanwritescode" target="_blank"><CodewarsIcon /></Nav.Link>
          </div>
        </Container>
      </header>
    </>
  )
}

export default App
