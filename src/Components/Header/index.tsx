import Credits from "./Credits";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";

interface IHeaderProps {
    activeItem: string;
    handleClick: (arg: string) => void;
}

const Header = ({activeItem, handleClick }: IHeaderProps) => {
    const navbarItems = [
        { label: 'Home', link: '#header', disabled: false },
        { label: 'About', link: '#about', disabled: false },
        { label: 'Resume', link: '#resume', disabled: false },
        { label: 'Services', link: '#services', disabled: false },
        { label: 'Portfolio', link: '#portfolio', disabled: false },
        { label: 'Contact', link: '#contact', disabled: false },
    ];


    const getHeaderClass = (): string =>
        activeItem === 'Home'? '' : 'header-top'

    return (
        <>
            <header id="header" className={ getHeaderClass() }>
                <div className="container">
                    <h1><a href='/my-portfolio/'>Ivan Mejico</a></h1>
                    <h2>I'm a Computer Engineering graduate passionate about <span>web development</span>.</h2>
                    <NavBar
                        activeItem={ activeItem }
                        items={ navbarItems }
                        onItemSelect={ handleClick } />
                    <SocialLinks />
                </div>
            </header>
            <Credits />
        </>
    )
}

export default Header;