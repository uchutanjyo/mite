import React, {useRef, useEffect, useState} from 'react';
import wami from '../mp3s/wami.mp3'
import unreleased1 from '../mp3s/unreleased-1.mp3'


// Music player
const songs = [
    {
        name: 'wami',
        displayName: 'Q-Q Birds - Clean',
        artist: 'Mite',
        date: '2018',
        file: wami,
        albumArt: 'https://f4.bcbits.com/img/a1756680641_2.jpg'
    },
    
    {
        name: 'unreleased-1',
        displayName: 'Unreleased-1',
        artist: 'Mite',
        date: '2020',
        file: unreleased1,
        albumArt: 'albums/thumbnails/hole.jpg'


    },


    ]

const MusicPlayer = () => {
    const [songTitle, setSongTitle] = useState('')
    const [songArtist, setSongArtist] = useState('')
    const [songIndex, setSongIndex] = useState(0)
    const [songArt, setSongArt] = useState(null)
    const [songDate, setSongDate] = useState('')

    const [trackProgress, setTrackProgress] = useState('0')
    const [progressPercent, setProgressPercent] = useState('0')



    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(null)
    
const getAudio = () => {


     if (songIndex > songs.length - 1) {
         
        setSongIndex(0);
        return new Audio(songs[0].file)    }
   
           if (songIndex < 0) {
         console.log(songIndex < 0)
         let songsLength = songs.length - 1
        setSongIndex(songsLength);
        console.log(songsLength)
        return new Audio(songs[songsLength].file)
    }
    else { 
        
        return new Audio(songs[songIndex].file)
       }
}

    //  if (songIndex < 0) {
    //      console.log(songIndex < 0)
    //      let songsLength = songs.length - 1
    //     setSongIndex(songsLength);
    //     console.log(songsLength)
    //     return new Audio(songs[songsLength].file)
    // }

    const progressBar = useRef();
    const audioRef = useRef(getAudio());
    const intervalRef = useRef();

    const loadSong = (song) => {
        setSongTitle(songs[songIndex].displayName)
        setSongArtist(songs[songIndex].artist)
        setSongDate(songs[songIndex].date)
        setSongArt(songs[songIndex].albumArt)
        // audioRef.current.addEventListener('loadedmetadata', (e) => {
 
    };


    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
  console.log(audioRef.current.currentTime)
       intervalRef.current = setInterval(() => {
            if (isPlaying) {
            setTrackProgress(Math.floor(audioRef.current.currentTime));

            // if (duration != null) {

            //     setProgressPercent((trackProgress/duration) * 100)
            //     console.log(progressPercent)
            // }
        
       }

        }, [1000]);
      
  }
      

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
            console.log(songIndex)

            audioRef.current.pause()
            setIsPlaying(false);

            if (songIndex > songs.length - 1) {
                alert('no more songs')
            }
            if (songIndex < 0) {
                return
            }
            console.log(songIndex)

            loadSong(songs[songIndex]);
            audioRef.current = new Audio(songs[songIndex].file)



              }
        , [ songIndex])


// this one took me a while - setting total duration of each track
        useEffect( () => {
            if (audioRef.current) {
            audioRef.current.addEventListener('loadedmetadata', (e) => {
                if (audioRef.current.duration != NaN) {
                    console.log(audioRef)

                    const dur = Math.floor(audioRef.current.duration)
                    const minutes = Math.floor(dur / 60);
                    const seconds = dur - minutes * 60;
                    setDuration(`${minutes}:${seconds}`) 
                    setProgressPercent((audioRef.current.currentTime/dur) * 100)
                }
              }) }
        }       
        , [audioRef, songIndex])
    

        // const setProgressBar = (e) => {
        //     console.log('dwsf')
        //     const width = e.clientX;
        //     const clickX = e.nativeEvent.offsetX;
        //     console.log(audioRef)
        //     const {duration} = audioRef;
        // const ok = (clickX / width) * duration;

        //     setTrackProgress(ok)

        // }
    return (
    <>

<div className="player-container">


  <div className="img-container">
      <img src={songArt} alt="Album Art" id="albumart2"/>
     <audio id="audio"><source src={audioRef}  type="audio/mp3" /></audio>
  </div>
  <h2 id="title">{songTitle}</h2>
  <h3 id="artist">{songArtist} - {songDate}</h3>
  <div className="progress-container" id="progress-container"  >
  <div className="progress" id="progress" style={{width : `${progressPercent}%`}}  ref={progressBar}></div>
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

</>
    )
}

export default MusicPlayer;


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