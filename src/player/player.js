
// Music player

const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('audio');
const progressCont = document.querySelector('#progress-container');
const progress = document.querySelector('#progress');
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');
const albumArt = document.querySelector('#albumart');
const artist = document.querySelector('#artist');
const title  = document.querySelector('#title');


// Music

const songs = [
    {
        name: 'sliver',
        displayName: 'Sliver - unreleased',
        artist: 'Mite',
        date: '2020'
    },
    
    {
        name: 'unreleased-1',
        displayName: 'Unreleased-1',
        artist: 'Mite',
    }
    ]
    
    // Check if playing
    let isPlaying = false;
    
    // Play
    
    function playSong() {
        console.log('OK')
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    audio.play();
    }
    
    // Pause
    
    function pauseSong() {
        console.log('OK')

        isPlaying  = false;
        playBtn.classList.replace('fa-pause', 'fa-play');
        playBtn.setAttribute('title', 'Play');
        audio.pause();
        
        }
    
    // Event listeners
    
    playBtn.addEventListener('click', () => (isPlaying? pauseSong
        () : playSong()));
    
    // Update DOM
    
    function loadSong(song) {
        title.textContent = song.displayName;
        artist.textContent = song.artist;
        audio.src = `https://github.com/uchutanjyo/mite/blob/main/src/player/mp3s/${song.name}.mp3`;
        albumArt.src =`https://github.com/uchutanjyo/mite/blob/main/src/player/images/${song.name}.jpg`;
    };
    
    
    //   Song index
    let songIndex = 0;
    
    // Next song
    function nextSong() {
        songIndex++;
        if (songIndex > songs.length - 1) {
            songIndex = 0;
        }
        loadSong(songs[songIndex]);
        playSong();}
    
    // Prev song
    function prevSong() {
        songIndex--;
        if (songIndex < 0) {
        songIndex = songs.length - 1;
        }
        loadSong(songs[songIndex]);
        playSong();
    }
    
    // Update progress
    function updateProgressBar(e) {
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
    
    // On load - Select first song
    
    loadSong(songs[songIndex]);
    
    // Set progress bar
    
    function setProgressBar(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const {duration} = audio;
        audio.currentTime = (clickX / width) * duration;
    }
    
    // Event Listeners 
    
    prevBtn.addEventListener('click', prevSong);
    
    nextBtn.addEventListener('click', nextSong);
    
    audio.addEventListener('ended', nextSong);
    
    audio.addEventListener('timeupdate', updateProgressBar);
    
    progressCont.addEventListener('click', setProgressBar)