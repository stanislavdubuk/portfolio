import * as React from 'react';

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { useIntersection } from './lib/hooks';

const App = () => {
  const [activeTab, setActiveTab] = React.useState('hero');

  const heroRef = React.useRef<HTMLElement>(null);
  const projectsRef = React.useRef<HTMLElement>(null);
  const aboutRef = React.useRef<HTMLElement>(null);

  const inViewportHero = useIntersection(heroRef.current, '-200px');
  const inViewportProjects = useIntersection(projectsRef.current, '-200px');
  const inViewportAbout = useIntersection(aboutRef.current, '-200px');

  React.useEffect(() => {
    if (inViewportHero) setActiveTab('hero');
    if (inViewportProjects) setActiveTab('projects');
    if (inViewportAbout) setActiveTab('about');
  }, [inViewportHero, inViewportProjects, inViewportAbout, activeTab]);

  return (
    <React.Fragment>
      <Navbar activeTab={activeTab} />
      <Hero reference={heroRef} />
      <Projects reference={projectsRef} />
      <About reference={aboutRef} />
    </React.Fragment>
  );
};

export default App;
