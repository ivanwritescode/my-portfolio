import TraitsSection from "./TraitsSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import InterestsSection from "./InterestsSection";
import QuotesSection from "./QuotesSection";
import { ISectionProps } from "../../common/interfaces";

const About = ({ isShown }: ISectionProps) => {
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