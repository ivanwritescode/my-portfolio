import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css' 
import './styles/App.scss'

import Header from './Components/Header'
import About from './Components/About'
import { useState } from 'react'

function App() {
  const [activeItem, setActiveItem] = useState<string>('Home');

  const handleHeaderClick = (item:string): void =>
      setActiveItem(item);

  return (
    <>
      <Header activeItem={ activeItem } handleClick={ handleHeaderClick } />
      { activeItem == "About" && <About /> } 
    </>
  )
}

export default App
