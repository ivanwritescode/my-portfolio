import TraitsSection from "./TraitsSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import InterestsSection from "./InterestsSection";
import QuotesSection from "./QuotesSection";

interface IAboutProps {
    isShown: boolean
}

const About = ({ isShown }: IAboutProps) => {
    const getClassName = () =>
        isShown ? "section-show" : "";

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