import * as React from 'react';

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { useIntersection } from './lib/hooks';

const App = () => {
  const [activeTab, setActiveTab] = React.useState('hero');

  const [inViewportHero, heroSection] = useIntersection();
  const [inViewportProjects, projectsSection] = useIntersection();
  const [inViewportAbout, aboutSection] = useIntersection();

  React.useEffect(() => {
    if (inViewportHero) setActiveTab('hero');
    if (inViewportProjects) setActiveTab('projects');
    if (inViewportAbout) setActiveTab('about');
  }, [inViewportHero, inViewportProjects, inViewportAbout]);

  return (
    <React.Fragment>
      <Navbar activeTab={activeTab} />
      <Hero reference={heroSection} />
      <Projects reference={projectsSection} />
      <About reference={aboutSection} />
    </React.Fragment>
  );
};

export default App;
