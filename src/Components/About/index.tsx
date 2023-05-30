import TraitsSection from "./TraitsSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import InterestsSection from "./InterestsSection";

const About = () => {
    return (
        <section id="about" className="section-show">
            <AboutSection />
            <TraitsSection />
            <SkillsSection />
            <InterestsSection />
        </section>
    )
}

export default About;