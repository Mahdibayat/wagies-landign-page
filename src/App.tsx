import React from 'react';
import Header from './components/header/header';
import SectionFive from './sections/sectionFive/sectionFive';
import SectionFore from './sections/sectionFore/sectionFore';
import SectionOne from './sections/sectionOne/sectionOne';
import SectionThree from './sections/sectionThree/sectionThree';
import SectionTwo from './sections/sectionTwo/sectionTwo';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="main-container">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFore />
        <SectionFive />
      </main>
    </div>
  );
};

export default App;
