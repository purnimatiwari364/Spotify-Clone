function playall(songnumber){
    var audioElement=document.getElementById(song);
    var playbtn=document.getElementById(play-pause);
    var SongFilename="music/"+songnumber+".mp3";
    var currentRow=document.getElementById("song"+songnumber);

    if(audioElement.getAttribute("src")== SongFilename !=audioElement.paused){
        audioElement.pause();
        playbtn.innerHTML='<img src="images/play-button.svg">';
        currentRow.classList.remove("highlight");
    }else{
        audioElement.setAttribute("src",SongFilename);
        audioElement.play();
        playbtn.innerHTML='<img src="images/pause-button.svg">';
        currentRow.classList.add("highlight");
    }
}

function playaudio(){
    var audiodocument=document.getElementById(song);
    var playbtn=document.getElementById(play-pause);
    if(audio.paused){
        audio.play();
        playbtn.innerHTML='<img src="images/pause-button.svg">';
    }else{
        audio.pause();
        playbtn.innerHTML='<img src="images/play-button.svg">';
    }
}
