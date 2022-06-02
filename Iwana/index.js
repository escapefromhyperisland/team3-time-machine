AFRAME.registerComponent("scale-down-on-mouseclick", {
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

AFRAME.registerComponent("scale-up-on-mouseclick", {
  schema: {
    to: {default: "3 3 3", type: "vec3"},
    radius: {type: "int", default: 4},
    positiony: {default: .3, type: "number"}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.el.addEventListener("click", function () {
      el.object3D.scale.copy(data.to);
      el.object3D.position.y = data.positiony;
      // el.object3D.radius.set(data.radius);
    // here should the y-position been updatet to more than 0.16 (perhaps 0.55) 
    // perhaps with mouseenter, -leave?
    // and make the rotation -180 and the animation stop
    // take away the changes when leaving??
    });
  }
});

const background = new Audio("./assets/384713__ramonmineiro__mad-scientist-lab-loopable.mp3")
const travelvideo = 
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
  document.querySelector("#travel-video").play()
  document.querySelector("#background-black").style.visibility = "hidden";

  setTimeout(()=>{
    background.play()
    document.querySelector("#timetravel").style.visibility = "hidden";
    document.querySelector("#music-button").style.visibility = "visible";
  }, 7000)
}