import { useState } from 'react';

const NavBar = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false)

    const onToggle = (): void => {
        setIsToggled(prevState => !prevState)
    }

    const getNavbarClass = (isToggled: boolean): string =>
        isToggled ? 'navbar navbar-mobile' : 'navbar'

    const getToggleClass = (isToggled: boolean): string =>
        isToggled ? 'bi bi-x mobile-nav-toggle' : 'bi bi-list mobile-nav-toggle'


    const disabledLinkStyles: React.CSSProperties = {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: 0.5,
        textDecoration: 'line-through'
    }


    return (
        <nav id="navbar" className={getNavbarClass(isToggled)}>
            <ul>
                <li><a className="nav-link active" href="#header">Home</a></li>
                <li><a className="nav-link" style={disabledLinkStyles} href="#about">About</a></li>
                <li><a className="nav-link" style={disabledLinkStyles} href="#resume">Resume</a></li>
                <li><a className="nav-link" style={disabledLinkStyles} href="#services">Services</a></li>
                <li><a className="nav-link" style={disabledLinkStyles} href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link" style={disabledLinkStyles} href="#contact">Contact</a></li>
            </ul>
            <i className={getToggleClass(isToggled)} onClick={onToggle}></i>
        </nav>
    )
}

export default NavBar;