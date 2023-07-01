import { ISectionProps } from "../../common/interfaces";

const Resume = ( {isShown}: ISectionProps) => {
    const getClassName = () => {
        const className = "resume";
        return isShown ? `${className} section-show` : className;
    }

    return (
        <section id="resume" className={ getClassName() }>
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Check My Resume</p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item pg-0">
                            <h4>BS in Computer Engineering</h4>
                            <h5>2012 - 2020</h5>
                            <p><em>Marinduque State College, Boac, Marinduque, Philippines</em></p>
                            <h6><b>Thesis: </b>IoT-Based Energy Monitoring System Using Arduino and Raspberry-Pi</h6>
                            <ul>
                                <li>Built a dashboard application from scratch using vanilla HTML, CSS, JavaScript, and PHP.</li>
                                <li>Implemented asynchronous web technologies like AJAX and Socket.io to provide real-time energy readings on the dashboard application.</li>
                                <li>Programmed Arduino Nano boards and integrated them with electric sensors, as well as a WiFi adapter, using modified C for accurate energy monitoring.</li>
                                <li>Configured a custom Apache web server on Raspberry Pi, enabling a PHP and MySQL backend for efficient data management.</li>
                                <li>Utilized Python programming to develop code for Raspberry Pi, enabling live readings to be displayed on an LCD screen.</li> 
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item pg-0">
                            <h4>Junior Web Developer</h4>
                            <h5>2020 - 2022</h5>
                            <p><em>Kreloses PLT, WFH</em></p>
                            <ul>
                            <li>Worked on localization of the Kreloses cloud-based business management software’s features like calendars, invoices, customers, services, and products.</li>
                                <li>Built some automated nightly build tests using Selenium and TeamCity.</li>
                                <li>Added features and bug fixes with React, TypeScript, and C#.</li>
                                <li>Developed customer data processing automation in C# to streamline data handling and improve data accuracy.</li>
                                <li>Followed strict SDLC procedures and timelines.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;