const btnPlayPause = document.getElementById("play-pause");
const btnNextChapter = document.getElementById("next");
const btnPreviousChapter = document.getElementById("previous");
const audio = document.getElementById("audio-chapter");

const nameChapter = document.getElementById("chapter");

let playing = false;
let chapter = 1;
const quantChapter = 30;

function playFaixa() {
    btnPlayPause.classList.remove("fa-circle-play");
    btnPlayPause.classList.add("fa-circle-pause");
    audio.play();
    playing = true;
  }
  
  function pauseFaixa() {
    btnPlayPause.classList.add("fa-circle-play");
    btnPlayPause.classList.remove("fa-circle-pause");
    audio.pause();
    playing = false;
  }
  
  function playOrPause() {
    if (playing === true) {
      pauseFaixa();
    } else {
      playFaixa();
    }
  }

  function nextChapter() {
    if (chapter < quantChapter) {
        chapter += 1;
    }
    else {
        chapter = 1;
    }
    
    audio.src = "books/dom-casmurro/" + chapter + ".mp3";
    nameChapter.innerText = "Capítulo " + chapter;
    playFaixa();
  }

  function previousChapter() {
    if (chapter === 1) {
        chapter = quantChapter;
    }
    else {
        chapter -= 1;
    }

    audio.src = "books/dom-casmurro/" + chapter + ".mp3";
    nameChapter.innerText = "Capítulo" + chapter;
    playFaixa();
  }

btnPlayPause.addEventListener("click", playOrPause);
btnNextChapter.addEventListener("click", nextChapter);
btnPreviousChapter.addEventListener("click", previousChapter);
audio.addEventListener("ended", nextChapter);