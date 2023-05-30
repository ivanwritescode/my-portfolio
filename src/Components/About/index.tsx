import TraitsSection from "./TraitsSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import InterestsSection from "./InterestsSection";
import QuotesSection from "./QuotesSection";

const About = () => {
    return (
        <section id="about" className="section-show">
            <AboutSection />
            <TraitsSection />
            <SkillsSection />
            <InterestsSection />
            <QuotesSection />
        </section>
    )
}

export default About;