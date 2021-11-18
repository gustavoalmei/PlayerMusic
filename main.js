let audioPlayer = document.querySelector('#audioPlayer')
let progress = document.querySelector('#progress')
let audioPlay = document.querySelector('#playPause')
let advTime = document.querySelector('#advTime')
let backTime = document.querySelector('#backTime')
let MinutesSeconds = document.querySelector('#MinutesSeconds')
let MinutesSecondsLive = document.querySelector('#MinutesSecondsLive')
let InputVolume = document.querySelector('#InputVolume')
let sound = document.querySelector('#sound')
let NextMusic = document.querySelector('#NextMusic')
let backMusic = document.querySelector('#backMusic')
let songs = document.querySelector('#songs')
let author = document.querySelector('#author')
let nameMusic = document.querySelector('#nameMusic')
let photoAlbum = document.querySelector('#photoAlbum')

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
setInterval(convertTimeAudio, 1000)

function timeMusic() {
  audioPlayer.currentTime = progress.value
}

// Músicas
const track = [
  {
    index: 0,
    nome: 'Matue',
    musica: 'Anos luz',
    src: 'assets/music/Matuê_Anos_Luz.mp4',
    photo: 'assets/img/matue_anos_luz.png'
  },

  {
    index: 1,
    nome: 'Lagum',
    musica: 'EU E MINHAS PARANOIAS',
    src: 'assets/music/Lagum_EU_E_MINHAS_PARANOIAS.mp3',
    photo: 'assets/img/Lagum.png'
  },

  {
    index: 2,
    nome: 'Lagum',
    musica: 'Ninguém Me Ensinou (KVSH Remix )',
    src: 'assets/music/Lagum_Ninguem_Me_Ensinou.mp3',
    photo: 'assets/img/Lagum.png'
  },

  {
    index: 3,
    nome: 'Jovem Dionisio - Pontos de Exclamação (Vintage Culture & Future Class Remix)',
    musica: 'Pontos de exclamações',
    src: 'assets/music/Jovem_Dionisio_Pontos_de_Exclamação.mp3',
    photo: 'assets/img/JovemDionisio.png'
  }
]

// Configurando barra de progresso da música
function ProgressAudio() {
  progress.max = audioPlayer.duration
  progress.value = audioPlayer.currentTime
}
// Definindo tempo de intervalo para executar a função
setInterval(ProgressAudio, 100)

//Play Pause Musica
let playing = true
function PlayMusic() {
  if (playing) {
    playPause.setAttribute('src', './assets/img/pause-circle-regular-50.png')
    audioPlayer.play()
    return (playing = false)
  } else {
    playPause.setAttribute('src', './assets/img/play-circle-regular-50.png')
    audioPlayer.pause()
    return (playing = true)
  }
}

//Avançar 10s
function MoreSecondMusic() {
  audioPlayer.currentTime += 10
}

//Voltar 10s
function LessSecondMusic() {
  audioPlayer.currentTime -= 10
}

let soundMuted = false

// controle de audio e som
function ChangeVolume() {
  audioPlayer.volume = InputVolume.value / 100

  if (InputVolume.value == 0) {
    sound.setAttribute('src', './assets/img/volume-mute-regular-50.png')
    audioPlayer.muted = true
    soundMuted = true
    return soundMuted
  } 
  else if(InputVolume.value <= 30) {
    sound.setAttribute('src', './assets/img/volume-low-regular-48.png')
    audioPlayer.muted = false
    soundMuted = false
    return soundMuted
  }else {
    sound.setAttribute('src', './assets/img/volume-full-regular-50.png')
    audioPlayer.muted = false
    soundMuted = false
    return soundMuted
  }
}

// Mutando
let UserVol
function mute() {
  UserVol = audioPlayer.volume * 100

  if (audioPlayer.muted == true) {
    sound.setAttribute('src', './assets/img/volume-full-regular-50.png')
    audioPlayer.muted = false
    InputVolume.value = UserVol
  } else {
    sound.setAttribute('src', './assets/img/volume-mute-regular-50.png')
    audioPlayer.muted = true
    InputVolume.value = 0
  }
}

//Mudando música, avançando e voltando
let songIndex = 0

function nextMusic() {
  songIndex++

  if (songIndex >= track.length) {
    alert('Limite máximo de músicas.')
  } else {
    songs.src = track[songIndex].src
    author.innerText = track[songIndex].nome
    nameMusic.innerText = track[songIndex].musica
    photoAlbum.src = track[songIndex].photo

    audioPlayer.load()
    PlayMusic()
  }
}

function backtMusic() {
  songIndex--

  if (songIndex < 0) {
    alert('Limite máximo de músicas.')
  } else {
    songs.src = track[songIndex].src
    author.innerText = track[songIndex].nome
    nameMusic.innerText = track[songIndex].musica
    photoAlbum.src = track[songIndex].photo

    audioPlayer.load()
    PlayMusic()
  }
}

// Definidno função para carregar a primeira faixa com a página, e definir volume padrão
window.onload = () => {
  songs.src = track[songIndex].src
  author.innerText = track[songIndex].nome
  nameMusic.innerText = track[songIndex].musica
  photoAlbum.src = track[songIndex].photo

  audioPlayer.volume = 0.5
}

playPause.addEventListener('click', PlayMusic)
advTime.addEventListener('click', MoreSecondMusic)
backTime.addEventListener('click', LessSecondMusic)
InputVolume.addEventListener('input', ChangeVolume)
progress.addEventListener('input', timeMusic)
NextMusic.addEventListener('click', nextMusic)
backMusic.addEventListener('click', backtMusic)