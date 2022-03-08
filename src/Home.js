import React from 'react';
import Main from './components/Main'
import Post from './components/Post'
import Paragraph from './components/Paragraph'


const Home = () => {
  return (
    <>
 <Main>
       <h1 className='header'>Mite News</h1>
    <Post id="4" date='2022-03-07'>
<Paragraph>
         been a few days. Modal was added to the 'Music' page (but so far empty of content). list of albums incl. album name, release year (??) and cover art added to Music page, as well. the data was mapped from a seperate file containing an array of objects. the next functionality will be: the modal will display more detailed album info for each album, depending on which is clicked.
</Paragraph>
<Paragraph>REAL mite news:  More shuffling thru old/newish recordings; a new album will Certainly come out in the next week or two. Fans, stay tuned!
</Paragraph>
          </Post>


            <Post id="3" date='2022-03-04'>
<Paragraph>
          today, messing with the css. looking for a design which references my interest in 'web design' (lol) dating back to 2003/2004. hard to put into words what it 'is'. basically, grainy and hard to define. this is in no way ' good design' but it's something that has always appealed to me for some reason.
</Paragraph>
<Paragraph>
         it's simple but i'll leave it as it is.. on to more functionality  !!
</Paragraph>
          </Post>


            <Post id="2" date='2022-03-02'>
<Paragraph>
          i am currently shamelessly using my Official Artist  Website as a React.js practice space (first of my own projects). my goal is to make a basic single-page app using React Router. i want to showcase my 'albums' using a popup modal which will display more info about each album + eventually a music player. i might even add a fake or real shopping cart/e-commerce section. we'll see.
</Paragraph>
<Paragraph>
          actual mite news: on Feb 28 around 12:00 AM, 'swarm' was released. tracks include '2daysin1', 'swarm' and 'The Old rotted Out Toilet. "
</Paragraph>
          </Post>

                      <Post id="1" date='2022-03-01'>
<Paragraph>
          The website was launched today (for all the mite fans).
</Paragraph>
          </Post>



         </Main>


    </>
  );
};

export default Home;
