import { ISectionProps } from "../common/interfaces";

const UnderDevelopment = ({ isShown }: ISectionProps) => {
    const getClassName = () =>
        isShown ? "section-show" : "";

    return (
        <section id="underdevelopment" className={getClassName()}>
            <div className="container">
                <i className="ri-tools-line development-icon"></i>
                <h2> 🚧 Currently Under Development 🚧</h2>
            </div>
        </section>

    )
}

export default UnderDevelopment;