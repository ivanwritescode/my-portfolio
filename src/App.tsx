import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss'
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
        <div className="container">
          <h1><a href='/my-portfolio/'>Ivan Mejico</a></h1>
          <h2>I'm a Computer Engineering graduate passionate about <span>web development</span>.</h2>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link active" href="#header">Home</a></li>
              <li><a className="nav-link" style={disabledLinkStyles} href="#about">About</a></li>
              <li><a className="nav-link" style={disabledLinkStyles} href="#resume">Resume</a></li>
              <li><a className="nav-link" style={disabledLinkStyles} href="#services">Services</a></li>
              <li><a className="nav-link" style={disabledLinkStyles} href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link" style={disabledLinkStyles} href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="social-links">
            <a href="https://twitter.com/ivanwritescode" target="_blank"></a>
            <a href="https://github.com/ivanwritescode" target="_blank"></a>
            <a href="https://linkedin.com/in/ivan-mejico" target="_blank"></a>
            <a href="https://tryhackme.com/p/Nemos" target="_blank"><TryHackMeIcon /></a>
            <a href="https://www.codewars.com/users/ivanwritescode" target="_blank"><CodewarsIcon /></a>
          </div>
        </div>
      </header>

      <div className='credits'>
        <figure>
          <blockquote className='blockquote'>
            <p>The road to success is always under construction</p>
          </blockquote>
          <figcaption className='blockquote-footer'>
            <cite title="Source Title">Lily Tomlin</cite>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default App
