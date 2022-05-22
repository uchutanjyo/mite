import React, { useEffect, useState} from 'react';
import wami from './wami.mp3'


// Music player

const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const progressCont = document.querySelector('#progress-container');
const progress = document.querySelector('#progress');
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');
// const albumArt = document.querySelector('#albumart');
// const artist = document.querySelector('#artist');
// const title  = document.querySelector('#title');

const songs = [
    {
        name: 'wami',
        displayName: 'Q-Q Birds - Clean',
        artist: 'Mite',
        date: '2020',
        file: wami
    },
    
    {
        name: 'unreleased-1',
        displayName: 'Unreleased-1',
        artist: 'Mite',
    }
    ]

const MusicPlayer = () => {
    const [songTitle, setSongTitle] = useState('')
    const [songFile, setSongFile] = useState(null)
    const [songArtist, setSongArtist] = useState('')
    const [songIndex, setSongIndex] = useState('0')
    const [isPlaying, setIsPlaying] = useState(false)

    
    useEffect(() => {
        const playBtn = document.querySelector('#play');
        const prevBtn = document.querySelector('#prev');
        const nextBtn = document.querySelector('#next');
        const progressCont = document.querySelector('#progress-container');
        const progress = document.querySelector('#progress');
        const currentTimeEl = document.querySelector('.current-time');
        const durationEl = document.querySelector('.duration');
        const albumArt = document.querySelector('#albumart');
        const artist = document.querySelector('#artist');
        const title  = document.querySelector('#title');
    }, [])



    const loadSong = (song) => {
        setSongTitle(songs[songIndex].displayName)
        setSongArtist(songs[songIndex].artist)
        setSongFile(new Audio((songs[songIndex].file)))

    };
    
    
    useEffect( () => {
        loadSong(songs[songIndex])
    }       
    , [])



// Play
const playSong = () => {
    setIsPlaying(true)
}

    
useEffect( () => {
    if (songFile != null) {
    let audio = document.querySelector('#audio')
    songFile.play();
    console.log(isPlaying)
}       }
, [ isPlaying])




// Pause
const pauseSong = () => {
    setIsPlaying(false);

    }

    useEffect( () => {
        if ((songFile != null && !isPlaying)) {

            songFile.pause();
    }       }
    , [isPlaying])


     // Next song
     const nextSong = () => {
        songIndex++;
        if (songIndex > songs.length - 1) {
            songIndex = 0;
        }
        loadSong(songs[songIndex]);
        playSong()
        ;}
    

    // Prev song
    const prevSong = () => {
        setSongIndex(0);
        if (songIndex < 0) {
        setSongIndex(songs.length - 1);
        }
        loadSong(songs[songIndex]);
        playSong();
    }

        // Update progress
        const updateProgressBar = (e) => {
            if (isPlaying) {
               const {duration, currentTime} = e.srcElement;
            //    Update progress bar
            const progressPercent = (currentTime/duration) * 100;
                progress.style.width = `${progressPercent}%`;
            // Calculate display for duration
            const durationMinutes = Math.floor(duration / 60);
            let durationSeconds = Math.floor(duration % 60);
            if (durationSeconds < 10) {
                durationSeconds = `0${durationSeconds}`;
            }
            if (durationSeconds) {
                durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
            }
        
            // Calculate display for current
            const currentMinutes = Math.floor(currentTime / 60);
            let currentSeconds = Math.floor(currentTime % 60);
            if (currentSeconds < 10) {
                currentSeconds = `0${currentSeconds}`;
            }
        
            currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`
        }}; 
    
        
        
        // Set progress bar
        
        // const setProgressBar = (e) => {
        //     const width = this.clientWidth;
        //     const clickX = e.offsetX;
        //     const {duration} = songFile;
        //     songFile.currentTime = (clickX / width) * duration;
        // }



    return (
    <>
                   <div className='albums'>

<h1 className='header'> Mite Music Player</h1>
<div className="player-container">
  <img src="images/youngmongrel.JPG" alt="Album Art" id="albumart"/>


  <div className="img-container">
      <img src="images/youngmongrel.JPG" alt="Album Art" id="albumart2"/>
     <audio id="audio"><source src={songFile} type="audio/mp3" /></audio>
  </div>
  <h2 id="title">{songTitle}</h2>
  <h3 id="artist">{songArtist}</h3>
  <div className="progress-container" id="progress-container">
  <div className="progress" id="progress"></div>
  <div className="duration-wrapper">
      <span className="current-time">0:00</span>
      <span className="duration">2:06</span>
  </div>
  <div className="player-controls">
      <i onClick={prevSong} className="fas fa-backward" id="prev" title="backward"></i>
      <i onClick={isPlaying ? pauseSong : playSong} className={`${isPlaying} ? fas fa-forward : fas fa-backward`} id="play" title="play"></i>
      <i onClick={nextSong} className="fas fa-forward" id="next" title="forward"></i>

  </div>
  </div>
</div>
</div>
</>
    )
}

export default MusicPlayer;