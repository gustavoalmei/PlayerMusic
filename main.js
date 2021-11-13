let audioPlayer = document.querySelector('#audioPlayer')
let progress = document.querySelector('#progress')
let audioPlay = document.querySelector('#play')
let audioPause = document.querySelector('#pause')
let advTime = document.querySelector('#advTime')
let backTime = document.querySelector('#backTime')
let MinutesSeconds = document.querySelector('#MinutesSeconds')
let MinutesSecondsLive = document.querySelector('#MinutesSecondsLive')
let InputVolume = document.querySelector('#InputVolume')
let sound = document.querySelector('#sound')

// Convertendo time do audio, e configurando time live
function convertTimeAudio() {
  let Minutes = Math.floor(audioPlayer.duration / 60)
  let Seconds = Math.floor(audioPlayer.duration % 60)
  let MinutesLive = Math.floor(audioPlayer.currentTime / 60)
  let SecondsLive = Math.floor(audioPlayer.currentTime % 60)

  if (MinutesLive < 10) {
    MinutesLive = '0' + MinutesLive
  }
  if (SecondsLive < 10) {
    SecondsLive = '0' + SecondsLive
  }
  if (Minutes < 10) {
    Minutes = '0' + Minutes
  }
  if (Seconds < 10) {
    Seconds = '0' + Seconds
  }

  MinutesSeconds.innerText = `${Minutes}:${Seconds}`
  MinutesSecondsLive.innerText = `${MinutesLive}:${SecondsLive}`
}
// Definindo tempo de intervalo para executar a função
setInterval(convertTimeAudio, 100)

// Configurando barra de progresso da música
function ProgressAudio() {
  progress.ariaValueMax = audioPlayer.duration
  progress.value = audioPlayer.currentTime
}
// Definindo tempo de intervalo para executar a função
setInterval(ProgressAudio,100)

function PlayMusic(){
  audioPlayer.play()
}

function PauseMusic(){
  audioPlayer.pause()
}

function MoreSecondMusic(){
  audioPlayer.currentTime += 10
}

function LessSecondMusic(){
  audioPlayer.currentTime -= 10
}

function ChangeTimeMusic(){
  progress.value = audioPlayer.currentTime
}

let soundMute = false

function ChangeVolume(){
  audioPlayer.volume = InputVolume.value / 100

  if(InputVolume.value == 0){
    soundMute = true
    sound.setAttribute("src", "./assets/img/volume-mute-regular-24.png")
    return soundMute = true
  }else{
    soundMute = false
    sound.setAttribute("src", "./assets/img/volume-full-regular-24.png")
    return soundMute = false
  }
}


audioPlay.addEventListener("click", PlayMusic)
audioPause.addEventListener("click", PauseMusic)
advTime.addEventListener("click", MoreSecondMusic)
backTime.addEventListener("click", LessSecondMusic)
progress.addEventListener("change", ChangeTimeMusic)
InputVolume.addEventListener("input", ChangeVolume)
