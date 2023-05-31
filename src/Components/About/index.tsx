import TraitsSection from "./TraitsSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import InterestsSection from "./InterestsSection";
import QuotesSection from "./QuotesSection";

interface IAboutProps {
    activeItem: string
}

const About = ({ activeItem }: IAboutProps) => {
    const getClassName = () =>
        activeItem === "About" ? "section-show" : "";

    return (
        <section id="about" className={ getClassName() }>
            <AboutSection />
            <TraitsSection />
            <SkillsSection />
            <InterestsSection />
            <QuotesSection />
        </section>
    )
}

export default About;