import React from 'react';
import Main from './components/Main'
import Post from './components/Post'
import Paragraph from './components/Paragraph'


const Home = () => {
  return (
    <>
 <Main>
       <h1 className='header'>Mite News</h1>

            <Post id="2" date='2022-03-02'>
<Paragraph>
          i am currently shamelessly using my Official Artist  Website as a React.js practice space (first of my own projects). my goals are to make a basic single-page app using React Router. so far, today, the 
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
