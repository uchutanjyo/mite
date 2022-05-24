import React, { useEffect, useState} from 'react';
import wami from '../mp3s/wami.mp3'
import unreleased1 from '../mp3s/unreleased-1.mp3'


// Music player

const progressCont = document.querySelector('#progress-container');
const progress = document.querySelector('#progress');
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');
const albumArt = document.querySelector('#albumart');
const artist = document.querySelector('#artist');
const title  = document.querySelector('#title');



const songs = [
    {
        name: 'wami',
        displayName: 'Q-Q Birds - Clean',
        artist: 'Mite',
        date: '2018',
        file: wami
    },
    
    {
        name: 'unreleased-1',
        displayName: 'Unreleased-1',
        artist: 'Mite',
        date: '2020',
        file: unreleased1
    }
    ]

const MusicPlayer = () => {
    const [songTitle, setSongTitle] = useState('')
    const [songFile, setSongFile] = useState(null)
    const [songArtist, setSongArtist] = useState('')
    const [songIndex, setSongIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(null)



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
    // let audio = document.querySelector('#audio')
    songFile.play();
    console.log(isPlaying)
}       }
, [isPlaying])




// Pause
const pauseSong = () => {
    setIsPlaying(false);

    }

    useEffect( () => {
        if ((songFile != null && !isPlaying)) {
            songFile.pause();
    }       }
    , [isPlaying])


    // when songIndex increases, load next song in songs array. 
    // when songIndex drops below zero, set to the final array index
    // i managed to make this work by returning automatically on songIndex reset (before, it was executing loadSong before the state had a chance to update)
        useEffect( () => {
            if (songIndex > songs.length - 1) {
                setSongIndex(0);
                return
            }
            if (songIndex < 0) {
                setSongIndex(songs.length - 1)
                return
            }
            loadSong(songs[songIndex]);

              }
        , [songIndex])


        useEffect( () => {
            const audio  = document.querySelector('#audio');
        
            console.log(audio)
            if (songFile) {
            songFile.addEventListener('loadedmetadata', (e) => {
                if (songFile.duration != NaN) {

                console.log(e)
            
                    const dur = songFile.duration;
                    console.log(dur)
                setDuration(dur) }
              }) }
        
        }       
        , [songFile])
    
    
        // Update progress

            const updateProgressBar = (e) => {

                if (isPlaying) {
                    console.log(e)
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
        
    
        
        
        
        const setProgressBar = (e) => {
            console.log(e)

            const width = e.clientX;
            const clickX = e.nativeEvent.offsetX;
            console.log(songFile)
            const {duration} = songFile;
            console.log(width, clickX, duration)
            songFile.currentTime = (clickX / width) * duration;

            console.log(songFile.currentTime)
        }



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
  <div className="progress-container" id="progress-container" onClick={setProgressBar}>
  <div className="progress" id="progress" ></div>
  <div className="duration-wrapper">
      <span className="current-time">0:00</span>
      <span className="duration">{duration}</span>
  </div>
  <div className="player-controls">
      <i onClick={() => setSongIndex(songIndex - 1)} className="fas fa-backward" id="prev" title="backward"></i>
      <i onClick={playSong} className={!isPlaying && 'fas fa-play main-button'} id="play" title="play"></i>
      <i onClick={pauseSong} className={isPlaying && 'fas fa-pause main-button'} id="pause" title="pause"></i>
      <i onClick={() => setSongIndex(songIndex + 1)} className="fas fa-forward" id="next" title="forward"></i>

  </div>
  </div>
</div>
</div>
</>
    )
}

export default MusicPlayer;