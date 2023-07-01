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
                    <img src={meportrait} className="img-fluid" alt="profile picture" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Junior Software Engineer/Web Developer</h3>
                    <p className="fst-italic">
                        I am a driven developer with two years of professional experience, and I am dedicated to continuous learning.
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                {/* <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 July 1995</span></li> */}
                                <li><i className="bi bi-chevron-right"></i> <strong>Home Phone:</strong> <span>(042) 754-2294</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Cellphone:</strong> <span>+63 905 336-9574</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Marinduque, Philippines</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>27</span></li> */}
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Computer Engineering</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ivanmejico.dev@gmail.com</span></li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        I've previously worked for a remote SaaS Cloud Service platform based in Malaysia. This experience not only allowed me to gain considerable competencies in frontend development skills such as HTML, CSS, and JavaScript in React but also provided me with the opportunity to enhance my collaboration and communication skills in a remote work setting. Engaging in tasks such as localization assignments, resolving customer ticket issues, bug fixes, and feature additions, I developed the ability to collaborate with people professionally, even in a virtual environment.
                    </p>
                    <p>
                        These experiences have not only expanded my technical competencies but have also equipped me with the necessary skills to work effectively and efficiently as part of a remote team. I am confident in my ability to adapt to different work environments and contribute positively to your organization's success.
                    </p>
                    <p>
                        In addition to my previous professional experiences, my daily coding practice and personal frontend projects have honed my skills, making me a valuable asset for your team.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AboutSection;