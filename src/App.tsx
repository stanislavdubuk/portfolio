import * as React from 'react';

import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

import { Layout } from './components/ui/Layout';
import { Container } from './components/ui/Container';
import { Header } from './components/Header';
import { Indicator } from './components/Indicator';
import { SideLink } from './components/SideLink';

import { useIntersection } from './lib/hooks';

const App = () => {
  const [inViewportHero, heroSection] = useIntersection();
  const [inViewportProjects, projectsSection] = useIntersection();
  const [inViewportAbout, aboutSection] = useIntersection();
  const [inViewportContact, contactSection] = useIntersection();

  return (
    <Layout>
      <Header />
      <SideLink side='left' />
      <SideLink side='right' />
      <Container>
        <Hero reference={heroSection} />
        <Projects reference={projectsSection} />
        <About reference={aboutSection} />
        <Contact reference={contactSection} />
      </Container>
      <Indicator
        inViewportHero={inViewportHero}
        inViewportProjects={inViewportProjects}
        inViewportAbout={inViewportAbout}
        inViewportContact={inViewportContact}
      />
    </Layout>
  );
};

export default App;
