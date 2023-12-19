import Acomplishments from "./components/Acomplishments/Acomplishments";
import BgAnimation from "./components/BackgrooundAnimation/BackgroundAnimation";
import Certifications from "./components/Certifications/Certifications";
import { Experience } from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Timeline from "./components/TimeLine/TimeLine";
import { Layout } from "./layout/Layout";
import { Section } from "./styles/GlobalComponents";
import Theme from "./styles/theme";

function App() {
  return (
    <Theme>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Experience />
        <Projects />
        <Technologies />
        <Timeline />
        {/* <Acomplishments /> */}
        <Certifications />
      </Layout>
    </Theme>
  );
}

export default App;
