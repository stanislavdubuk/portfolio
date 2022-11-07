import * as React from 'react';

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

import { useIntersection } from './lib/hooks';
import { ESections } from './lib/enums';

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
    <React.Fragment>
      <Navbar activeSection={activeSection} />
      <Hero reference={heroSection} />
      <Projects reference={projectsSection} />
      <About reference={aboutSection} />
    </React.Fragment>
  );
};

export default App;
