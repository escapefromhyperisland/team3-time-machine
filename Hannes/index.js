const dinosound = new Audio("./assets/dinosound.mp3")
dinosound.volume = 0.2;
dinosound.loop = true;

const nextLevel = () => {
  window.parent.postMessage('nextLevel');
}

function closeText1() {
  document.querySelector("#text1").style.visibility = "hidden";
  document.querySelector("#travel-video").play()
  document.querySelector("#text1-background").style.visibility = "hidden";

  setTimeout(()=>{
    dinosound.play()
    document.querySelector("#timetravel").style.visibility = "hidden";
    document.querySelector("#info-button").style.visibility = "visible";
  }, 7500)
}

function toggleInfo() {
  document.querySelector("#info-popup").classList.toggle("hidden");
}

