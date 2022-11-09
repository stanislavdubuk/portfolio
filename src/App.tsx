import * as React from 'react';

import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

import { Layout } from './components/ui/Layout';
import { Container } from './components/ui/Container';
import { Header } from './components/Header';
import { Indicator } from './components/Indicator';

import { useIntersection } from './lib/hooks';
import { ESections } from './lib/enums';
import { SideLink } from './components/SideLink/SideLink';

const App = () => {
  const [activeSection, setActiveSection] = React.useState<ESections>(
    ESections.Hero
  );

  const [inViewportHero, heroSection] = useIntersection();
  const [inViewportProjects, projectsSection] = useIntersection();
  const [inViewportAbout, aboutSection] = useIntersection();

  React.useEffect(() => {
    if (inViewportHero) setActiveSection(ESections.Hero);
    if (inViewportProjects) setActiveSection(ESections.Projects);
    if (inViewportAbout) setActiveSection(ESections.About);
  }, [inViewportHero, inViewportProjects, inViewportAbout]);

  return (
    <Layout>
      <Header activeSection={activeSection} />
      <SideLink side='left' />
      <SideLink side='right' />
      <Container>
        <Hero reference={heroSection} />
        <Projects reference={projectsSection} />
        <About reference={aboutSection} />
      </Container>
      <footer></footer>
      <Indicator activeSection={activeSection} />
    </Layout>
  );
};

export default App;
