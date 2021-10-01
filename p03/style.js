const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Functions
// 1 - toggleVideo - play or pause video
// if video is playing, then pause
// if video is paused, then play
function toggleVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

// 2 - updateIcon - toggle between play or pause icons
// if video is playing, show pause icon
// if video is pause, show play icon
function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
};

// 3 - updateProgress - update the position to the progress bar of the timestamp
function updateProgress() {
    progress.value = video.currentTime/video.duration*100; 

    
    // update Timestamp
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds< 10) {
        seconds = `0${seconds}`;
    }
    timestamp.innerHTML = `${minutes}:${seconds}`
};

// 4 - stopVideo - stop video playback and reset time to Zero
function stopVideo() {
    video.paused;
    video.currentTime = 0;
};

// 5 - setProgress - update video playback time based on manual change in progress bar
function setProgress() {
    //update slider
    video.currentTime = Progress.value * video.duration / 100;

};


// Event Listener
// 1 - Video Element - click to play or pause video
video.addEventListener('click', toggleVideo);

// 2 - Video Element - play to toggle play icon back to pause icon
video.addEventListener('paused', updateIcon);

// 3 - Video Element - play to toggle pause icon back to play icon 
video.addEventListener('play', updateIcon);

// 4 - Video Element - update progress bar and timestamp 
video.addEventListener('timeupdate', updateProgress);

// 5 - play button - click to play or pause video 
play.addEventListener('click', toggleVideo);

// 6 - stop button - click to reset video or pause video
stop.addEventListener('click', stopVideo);

// 7 - progress bar - change position to change time of playback
progress.addEventListener('change', setProgress);
