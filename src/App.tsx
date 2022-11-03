import * as React from 'react';

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </React.Fragment>
  );
};

export default App;
