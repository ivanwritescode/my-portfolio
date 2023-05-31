import { ISectionProps } from "../../common/interfaces";
import SocialLinks from "../Header/SocialLinks";

const Contact = ({ isShown }: ISectionProps) => {
    const getClassName = () => {
        const className = "contact";
        return isShown ? `${className} section-show` : className;
    }

    return (
        <section id="contact" className={getClassName()}>
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Contact Me</p>
                </div>

                <div className="row mt-2">
                    <div className="col-md-6 d-flex align-items-stretch">
                        <div className="info-box">
                        <i className="icon bi bi-geo-alt"></i>
                            <h3>My Address</h3>
                            <p>Brgy. Uno, Gasan, Marinduque, Philippines</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="icon bi bi-share"></i>
                            <h3>Social Profiles</h3>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="icon bi bi-envelope"></i>
                            <h3>Email me</h3>
                            <p>ivanmejico.dev@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="icon bi bi-telephone"></i>
                            <h3>Call me</h3>
                            <p>(042) 754-2294</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;