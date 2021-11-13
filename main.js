let audioPlayer = document.getElementById("audioPlayer")
let progress = document.getElementById("progress")
let audioPlay = document.querySelector("#play")
let audioPause = document.querySelector("#pause")
let advTime = document.querySelector("#advTime")
let backTime = document.querySelector("#backTime")


audioPlayer.addEventListener("timeupdate",()=>{
  progress.value = audioPlayer.currentTime
  progress.ariaValueMax = audioPlayer.currentTime
  
})

audioPlayer.addEventListener("input", ()=>{
  progress = audioPlayer.currentTime
})

audioPlay.addEventListener("click", ()=>{
  audioPlayer.play()
})

audioPause.addEventListener("click", ()=>{
  audioPlayer.pause()
})

advTime.addEventListener("click", ()=>{
  audioPlayer.currentTime += 10
})

backTime.addEventListener("click", ()=>{
  audioPlayer.currentTime -= 10
})
