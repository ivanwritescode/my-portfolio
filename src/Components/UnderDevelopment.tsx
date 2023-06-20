import { ISectionProps } from "../common/interfaces";

const UnderDevelopment = ({ isShown }: ISectionProps) => {
    const getClassName = () =>
        isShown ? "section-show" : "";

    return (
        <section id="underdevelopment" className={getClassName()}>
            <div className="container">
                <i className="ri-tools-line development-icon"></i>
                <h2> 🚧 Work in progress. 🚧</h2>
                <p>Please check my <a href="https://github.com/ivanwritescode">GitHub</a> for my projects</p>
            </div>
        </section>

    )
}

export default UnderDevelopment;