import 'remixicon/fonts/remixicon.css'
import { interests } from '../../util/constants'


const InterestsSection = () => {
    const getClassName = (i: number) => {
        let className = "col-lg-3 col-md-4";
        if(i === 3)
            className = `${className} mt-4 mt-lg-0`;
        else if (i>0 && i<3)
            className = `${className} mt-4 mt-md-0`;
        else if (i>3)
            className = `${className} mt-4`;
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