const sounds = {
    "sd01" : "sound/01.mp3",
    "sd02" : "sound/02.mp3"
}

function play(soundId) {
    // const parse = JSON.parse(sounds);
    const audioName = sounds[soundId];
    const audio = new Audio(audioName)
    audio.currentTime = 0;
    audio.play();
}