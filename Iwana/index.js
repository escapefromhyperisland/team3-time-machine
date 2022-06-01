AFRAME.registerComponent("scale-on-mouseclick", {
  schema: {
    to: {default: "0.5 0.5 0.5", type: "vec3"}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.el.addEventListener("click", function () {
      el.object3D.scale.copy(data.to);
    });
  }
});

const background = new Audio("./assets/384713__ramonmineiro__mad-scientist-lab-loopable.mp3")
background.volume = 0.2;
background.loop = true;
let musicIsPlaying = true;


function handleMusic () {
  const musicIcon = document.querySelector("#music-icon")
    musicIsPlaying? background.pause() : background.play();
  musicIsPlaying? musicIcon.className = "fas fa-volume-mute fa-xs" : musicIcon.className = "fas fa-volume-down fa-xs";
    musicIsPlaying = !musicIsPlaying;
}

function closePopup() {
  document.querySelector("#popup").style.visibility = "hidden";

  setTimeout(()=>{
    background.play()
    document.querySelector("#timetravel").style.visibility = "hidden";
    document.querySelector("#music-button").style.visibility = "visible";
  }, 2000)
}