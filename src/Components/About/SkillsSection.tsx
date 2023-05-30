import { ReactNode } from "react"
import { skills } from "../../util/constants";

interface IColumnWrapperProps {
    children: ReactNode;
}

const ColumnWrapper = (props: IColumnWrapperProps) => {
    return (
        <div className="col-lg-6">
            { props.children }
        </div>
    )
}

const SkillsSection = () => {
    return (
        <div className="skills container">
            <div className="section-title">
                <h2>skills</h2>
            </div>
            <div className="row skills-content">
                { skills.map((skill) => 
                    <ColumnWrapper key={ skill.name }>
                        <div className="progress">
                            <span className="skill">{skill.name} <i className="val">{skill.proficiency}%</i></span>
                            <div className="progress-bar-wrap">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${skill.proficiency}%` }}
                                    role="progressbar"
                                    aria-valuenow={ 100 }
                                    aria-valuemin={ 0 }
                                    aria-valuemax={ 100 }>
                                </div>
                            </div>
                        </div>
                    </ColumnWrapper>) }
            </div>
        </div>
    )
}

export default SkillsSection;