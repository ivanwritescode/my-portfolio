import NavBar from "./HeaderComponents/NavBar";
import SocialLinks from "./HeaderComponents/SocialLinks";

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <h1><a href='/my-portfolio/'>Ivan Mejico</a></h1>
                    <h2>I'm a Computer Engineering graduate passionate about <span>web development</span>.</h2>
                    <NavBar />
                    <SocialLinks />
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

export default Header;