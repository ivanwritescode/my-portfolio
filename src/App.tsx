import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css' 
import './styles/App.scss'

import Header from './Components/Header'
import About from './Components/About'
import { useState } from 'react'
import UnderDevelopment from './Components/UnderDevelopment'
import Resume from './Components/Resume'

function App() {
  const [activeItem, setActiveItem] = useState<string>('Home');

  const handleHeaderClick = (item:string): void =>
      setActiveItem(item);

  return (
    <>
      <Header activeItem={ activeItem } handleClick={ handleHeaderClick } />
      <About isShown={ activeItem === "About" } /> 
      <Resume isShown={ activeItem === "Resume" } />
      <UnderDevelopment isShown={ activeItem == "Services"} />
      <UnderDevelopment isShown={ activeItem == "Portfolio"} />
      <UnderDevelopment isShown={ activeItem == "Contact"} />
    </>
  )
}

export default App
