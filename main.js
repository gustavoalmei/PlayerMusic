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

  MinutesSeconds.innerText = `${Minutes}:${Seconds}`
  MinutesSecondsLive.innerText = `${MinutesLive}:${SecondsLive}`
}
// Definindo tempo de intervalo para executar a função
setInterval(convertTimeAudio, 100)

function timeMusic(){
  audioPlayer.currentTime = progress.value
}


// Configurando barra de progresso da música
function ProgressAudio() {
  progress.max = audioPlayer.duration
  progress.value = audioPlayer.currentTime
}
// Definindo tempo de intervalo para executar a função
setInterval(ProgressAudio,100)

//Play Musica
function PlayMusic(){
  audioPlayer.play()
}

//Pausar Musica
function PauseMusic(){
  audioPlayer.pause()
}

//Avançar 10s
function MoreSecondMusic(){
  audioPlayer.currentTime += 10
}

//Voltar 10s
function LessSecondMusic(){
  audioPlayer.currentTime -= 10
}

let soundMuted = false

// controle de audio e som
function ChangeVolume(){
  audioPlayer.volume = InputVolume.value / 100

  if(InputVolume.value == 0){
    sound.setAttribute("src", "./assets/img/volume-mute-regular-24.png")
    audioPlayer.muted = true
    soundMuted = true
    return soundMuted
  }else{
    sound.setAttribute("src", "./assets/img/volume-full-regular-24.png")
    audioPlayer.muted = false
    soundMuted = false
    return soundMuted
  }
}

// Mutando
function mute(){

  VolMusic = InputVolume.value / 100;
  if(audioPlayer.muted == true){
    sound.setAttribute("src", "./assets/img/volume-full-regular-24.png")
    audioPlayer.muted = false
  }else{
    sound.setAttribute("src", "./assets/img/volume-mute-regular-24.png")
    audioPlayer.muted = true
  }
}

audioPlay.addEventListener("click", PlayMusic)
audioPause.addEventListener("click", PauseMusic)
advTime.addEventListener("click", MoreSecondMusic)
backTime.addEventListener("click", LessSecondMusic)
InputVolume.addEventListener("input", ChangeVolume)
progress.addEventListener("input", timeMusic)

// Músicas