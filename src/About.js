import React from 'react';
import Main from './components/Main'
import Paragraph from './components/Paragraph'


const About = () => {
  return (
<Main>
      <h1 className='header'>About Mite</h1>

      
     <section className='Portraits'>
           
      <img src={require("./mite-portrait.png")} className="portrait" />
    
<div className='about'>
       <Paragraph>
mite was born  out of  Mite wanting to hear certain sounds.  it  wanted to make the most personally pleasing sounds possible (which often means displeasing others...). the "style" varies,. but it's becoming more and more *NOISE* as of late. 
</Paragraph>
<Paragraph>
      located in Toronto, ON and has also been located in Tokyo. open to collaboration of (almost) any kind.
</Paragraph>
   <Paragraph>
some words that describe  mite's music: ugly, displeasing, scary, unappealing, harsh, dissonant, relaxing, annoying, fun, dark, light, dissociative, varied, pleasing, beautiful, rich, tinny, lacking, minimal,  maximal, poo, noisy, melodic, improvised, not considered, no thought, just feeling, comedy, live DJ set, old  keyboard with built in MIDI instruments covered with black paint, a guitar with less than 5 strings, a dusty bass, a,  the same pedal setup since the beginning, the, rock, ambient,  rock,
</Paragraph>
   <Paragraph>
other projects:
<section><a href="https://brianchampagne.bandcamp.com/releases">Brian Champagne</a>
</section>
<a href="https://traumaticacid.bandcamp.com/releases">Traumatic acid</a>
</Paragraph>

</div>
   
        <img src="https://f4.bcbits.com/img/0026884514_10.jpg"className="portrait" />
        </section>
  
  </Main>
  );
};

export default About;
