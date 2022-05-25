import React, {useEffect} from 'react';
import Main from './components/Main'
import Paragraph from './components/Paragraph'
import MusicPlayer from './components/MusicPlayer';


const Player = () => {



  return (
<div className="main-player">
<h1 className='header'>Mite Music Player</h1>

  <MusicPlayer></MusicPlayer>
</div> 
  );
};

export default Player;
