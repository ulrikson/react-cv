import React from 'react';
import '../styles/main.css';

import Title from './Title'
import Projects from './Projects'
import Education from './Education'
import SocialIcons from './SocialIcons'

function App() {
  return (
    <div className="App">
      <div className="container">
        <SocialIcons />
        <Title />
        <Projects />
        <Education />
      </div>
    </div>
  );
}

export default App;
