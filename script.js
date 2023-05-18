console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {
        songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "Looser", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"
    },
    {
        songName: "nasamaj", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"
    },
    {
        songName: "bhokali", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"
    },
    {
        songName: "bambhiya bole", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"
    },
    {
        songName: "game song", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"
    },
    {
        songName: "tariyan de desh", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"
    },
    {
        songName: "khaab", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"
    },
    {
        songName: "daru badnam", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"
    },
    {
        songName: "pithal pathal", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"
    },
]
songItems.forEach((element, i) => {
    //console.log(element, i);
    //console.log(songs[i].coverPath)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();
// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//listen to events 
// document.addEventListener('time')
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        // console.log(e.target);

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})