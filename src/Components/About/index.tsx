import TraitsSection from "./TraitsSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";

const About = () => {
    return (
        <section id="about" className="section-show">
            <AboutSection />
            <TraitsSection />
            <SkillsSection />
        </section>
    )
}

export default About;