import React, {useRef, useEffect, useState} from 'react';
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
        file: wami,
        albumArt: './albums/thumbnails/hole.jpg'
    },
    
    {
        name: 'unreleased-1',
        displayName: 'Unreleased-1',
        artist: 'Mite',
        date: '2020',
        file: unreleased1,
        albumArt: './albums/thumbnails/hole.jpg'


    }
    ]

const MusicPlayer = () => {
    const [songTitle, setSongTitle] = useState('')
    const [songArtist, setSongArtist] = useState('')
    const [songIndex, setSongIndex] = useState(0)
    const [songArt, setSongArt] = useState(null)
    const [songDate, setSongDate] = useState('')

    const [trackProgress, setTrackProgress] = useState('0')



    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(null)
    
    const progressBar = useRef();
    const audioRef = useRef(new Audio((songs[songIndex].file)));
    const intervalRef = useRef();

    const loadSong = (song) => {
        setSongTitle(songs[songIndex].displayName)
        setSongArtist(songs[songIndex].artist)
        setSongDate(songs[songIndex].date)
        setSongArt(songs[songIndex].albumArt)
        

    };
    

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
  console.log(audioRef.current.currentTime)
       intervalRef.current = setInterval(() => {
            if (isPlaying) {
            setTrackProgress(Math.floor(audioRef.current.currentTime));
       }

        }, [1000]);
      
  }

    
    useEffect( () => {
        
        loadSong(songs[songIndex])
    }       
    , [audioRef])





// Play
const playSong = () => {
    setIsPlaying(true)
    
}

const pauseSong = () => {
    setIsPlaying(false);

    }

    
useEffect( () => {
 
        if (audioRef != null && isPlaying) {
            startTimer()
            audioRef.current.play();
        }
        else if(audioRef != null && !isPlaying)  {
            audioRef.current.pause();

        }
    // let audio = document.querySelector('#audio')
    console.log(isPlaying)
}       
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

// this one took me a while - setting total duration of each track
        useEffect( () => {
            if (audioRef.current) {
            audioRef.current.addEventListener('loadedmetadata', (e) => {
                if (audioRef.current.duration != NaN) {
                    const dur = Math.round(audioRef.current.duration)
                    const minutes = Math.floor(dur / 60);
                    const seconds = dur - minutes * 60;
                    setDuration(`${minutes}:${seconds}`) }
              }) }

        }       
        , [audioRef])
    

        // const updateProgressBar = (e) => {
        //     const width = e.clientX;
        //     const clickX = e.nativeEvent.offsetX;
        //     console.log(audioRef.currentTime)

        //     console.log(e)
        //     if (isPlaying) {
                
    

        //  //    Update progress bar
        //  const progressPercent = (audioRef.currentTime/duration) * 100;
        //  console.log(progressBar)
        //      progressBar.current.style.setProperty('width', `${progressPercent}%`);

        //  // Calculate display for current
        //  const currentMinutes = Math.floor(currentTime / 60);
        //  let currentSeconds = Math.floor(currentTime % 60);
        //  if (currentSeconds < 10) {
        //      currentSeconds = `0${currentSeconds}`;
        //  }
        //  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`

        // }
        
        // }
        // 
        // const setProgressBar = (e) => {
        //     console.log(e)
        //     const width = e.clientX;
        //     const clickX = e.nativeEvent.offsetX;
        //     console.log(audioRef)
        //     const {duration} = audioRef;
        //     console.log(width, clickX, duration)
        //     audioRef.currentTime = (clickX / width) * duration;

        //     setTrackProgress(audioRef.trackProgress)

        // }



    return (
    <>
                   <div className='albums'>

<h1 className='header'> Mite Music Player</h1>
<div className="player-container">


  <div className="img-container">
      <img src={songArt} alt="Album Art" id="albumart2"/>
     <audio id="audio"><source src={audioRef}  type="audio/mp3" /></audio>
  </div>
  <h2 id="title">{songTitle}</h2>
  <h3 id="artist">{songArtist} - {songDate}</h3>
  <div className="progress-container" id="progress-container"  ref={progressBar}>
  <div className="progress" id="progress" ></div>
  <div className="duration-wrapper">
      <span className="current-time">{trackProgress}</span>
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