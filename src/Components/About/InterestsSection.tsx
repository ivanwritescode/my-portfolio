import 'remixicon/fonts/remixicon.css'

const interests = [
    { name: "Open-Source", icon: <i className="ri-git-branch-line" style={{ color: "#9897df" }}></i> },
    { name: "Internet of Things", icon: <i className="ri-home-wifi-line" style={{ color: "#af4343" }}></i> },
    { name: "Cybersecurity", icon: <i className="ri-fingerprint-line" style={{ color: "#29cc61" }}></i> },
    { name: "Security CTF", icon: <i className="ri-flag-line" style={{ color: "#ff1f29" }}></i> },
    { name: "DevOps", icon: <i className="ri-server-line" style={{ color: "#4233ff" }}></i> },
    { name: "Digital Art", icon: <i className="ri-palette-line" style={{ color: "#b20969" }}></i> },
    { name: "World History", icon: <i className="ri-ancient-gate-fill" style={{ color: "#e3d312" }}></i> },
    { name: "NASA", icon: <i className="ri-planet-line" style={{ color: "#3163cc" }}></i> },
]

const InterestsSection = () => {
    const getClassName = (i: number) => {
        let className = "col-lg-3 col-md-4";
        if(i === 3) {
            className = `${className} mt-4 mt-lg-0`
        } else if (i>0 && i<3) {
            className = `${className} mt-4 mt-md-0`
        } else if (i>3) {
            className = `${className} mt-4`
        } 
        return className;
    }

    return (
        <div className="interests container">
            <div className="section-title">
                <h2>Interests</h2>
            </div>
            <div className="row">

            { interests.map((interest, i) =>
                <div key={ interest.name } className={getClassName(i)}>
                    <div className="icon-box">
                        {interest.icon}
                        <h3>{interest.name}</h3>
                    </div>
                </div>) }
            </div>
        </div>
    )
}

export default InterestsSection;