import { ReactNode } from "react"

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
    const skills = [
        { name: "GitHub and Git Version Control", proficiency: 60 },
        { name: "HTML, CSS, and JavaScript", proficiency: 60 },
        { name: "CSS Preprocessors (SASS/SCSS)", proficiency: 40 },
        { name: "Bootstrap", proficiency: 40 },
        { name: "Material-UI", proficiency: 20 },
        { name: "React and Redux", proficiency: 40 },
        { name: "AJAX, socket.io, async/await, and axios", proficiency: 40 },
        { name: "Web Security", proficiency: 40 },
        { name: "PHP, MySQL, Apache backend", proficiency: 40 },
        { name: "Github Actions CI/CD", proficiency: 40 },
        { name: "npm, webpack, and babel", proficiency: 20 },
        { name: "Photoshop and Adobe Illustrator", proficiency: 20 },
        { name: "GitLab", proficiency: 10 },
        { name: "TeamCity CI/CD", proficiency: 10 },
    ] 

    return (
        <div className="skills container">
            <div className="section-title">
                <h2>skills</h2>
            </div>
            <div className="row skills-content">
                { skills.map((skill) => 
                    <ColumnWrapper>
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