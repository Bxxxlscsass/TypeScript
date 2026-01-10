const songs = ["Juice", "Shake it Off", "What's up"];

function runOnSOngs(getSongAt: (index: number) => string) {
    for (let i = 0; i < songs.length; i++) {
        console.log(getSongAt(i));
    }
}

function getSongAt(index: number) {
    return `${songs[index]}`;
}

runOnSOngs(getSongAt); //Ok

function logSong(song: string) {
    return `${song}`;
}

runOnSOngs((index) => logSong(songs[index] ?? ""));

//this will throw the compiler error discussed above
//runOnSOngs(logSong);
//~~~~~~~~~~~~~~~~~~
//error: argument of type (song: string) => string is not 
//assignable to parameter of type  (index are imcompatible)

