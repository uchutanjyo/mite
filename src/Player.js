import React from 'react';
import Main from './components/Main'
import Paragraph from './components/Paragraph'



const Player = () => {
  return (
    <Main>
               <div className='albums'>

      <h1 className='header'> Mite Music Player</h1>
      <div className="player-container">
        <img src="images/youngmongrel.JPG" alt="Album Art" id="albumart"/>

     
        <div className="img-container">
            <img src="images/youngmongrel.JPG" alt="Album Art" id="albumart2"/>

        </div>
        <h2 id="title">Sliver</h2>
        <h3 id="artist">Mongrel</h3>
        <audio src="mp3s/sliver.mp3"></audio>
        {/* Progress bar */}
        <div className="progress-container" id="progress-container">
        <div className="progress" id="progress"></div>
        <div className="duration-wrapper">
            <span className="current-time">0:00</span>
            <span className="duration">2:06</span>
        </div>
        {/* Controls */}
        <div className="player-controls">
            <i className="fas fa-backward" id="prev" title="backward"></i>
            <i className="fas fa-play main-button" id="play" title="play"></i>
            <i className="fas fa-forward" id="next" title="forward"></i>

        </div>
        </div>
</div>
</div>
    </Main>
  );
};

export default Player;
