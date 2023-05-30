import meportrait from "../../assets/mepngart.png";

const AboutSection = () => {
    return (
        <div className="about-me container">
            <div className="section-title">
                <h2>About</h2>
                <p>Learn more about me</p>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <img src={ meportrait } className="img-fluid" alt="profile picture" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Frontend Developer</h3>
                    <p className="fst-italic">
                        I am a self-taught and driven Web Developer with one year of professional experience, and I am dedicated to continuous learning.
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 July 1995</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Home Phone:</strong> <span>(042) 754-2294</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Cellphone:</strong> <span>+63 905 336-9574</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Marinduque, Philippines</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>27</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Computer Engineering</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ivan.dev@gmail.com</span></li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        I have gained proficiency in HTML and CSS, enabling me to create visually appealing static websites
                        with intermediate layouts and styles. I am particularly skilled in crafting well-structured and engaging user interfaces.
                        Additionally, I have been actively learning and applying React to build components and enhance the functionality of web
                        applications. With a solid understanding of web APIs, I am capable of integrating external services and data into my
                        projects. I am continuously expanding my skill set and eagerly seeking new challenges to further develop my expertise in web
                        development. I am excited to share my passion and contribute to innovative projects in the field.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;