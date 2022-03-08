import React from 'react';
import Main from './components/Main'
import Paragraph from './components/Paragraph'


const About = () => {
  return (
<Main>
      <h1 className='header'>About Mite</h1>
      <section className='Portrait'><img src={require("./mite-portrait.png")} className="portrait" /></section>
            <section><img src="https://f4.bcbits.com/img/0026884514_10.jpg"
className="portrait" /></section>
      <Paragraph>
mite was born in 30

      </Paragraph>
  </Main>
  );
};

export default About;
