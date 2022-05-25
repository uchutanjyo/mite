import React from 'react';
// import Main from './components/Main'
import Main from './components/Main'
import Paragraph from './components/Paragraph'



const Buy = () => {
  return (
   <Main>
       <h1 className='header' > Buy  Mite Merchandise</h1>
<Paragraph>
All released Mite albums can be purchased in .wav at <a href="http://mitehole.bandcamp.com">http://mitehole.bandcamp.com.</a> 
</Paragraph>
<Paragraph>
As promised on that page, Mite will autograph a custom made Rotted out old something upon request.
</Paragraph>
<Paragraph>
Also, as was Also promised on that page, Mite will give you a CD-R for 1 cent (any album). Canadian Penny, please.  stay tuned for more merchandise.</Paragraph>
<Paragraph>
Please check out the Mite Music Player for Rare & Unreleased tracks.</Paragraph>
  </Main>
  );
};

export default Buy;
