import { Container } from 'react-bootstrap'
import './styles/App.scss'

function App() {

  return (
    <>
      <header id="header">
        <Container>
          <h1><a href='/'>Ivan Mejico</a></h1>
          <h2>I'm a passionate <span>web developer</span></h2>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div>
            <a href="twitter.com/ivan">twtricon</a>
            <a href="facebook.com/ivan">fbicon</a>
            <a href="linkedin.com/ivan">linkeinicon</a>
            <a href="github.com/ivan">githubicon</a>
            <a href="ivansottomejico.com">websiteicon</a>
          </div>
        </Container>
      </header>
    </>
  )
}

export default App
