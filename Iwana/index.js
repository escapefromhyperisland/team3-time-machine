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


AFRAME.registerComponent("change-text-on-mouseclick", {
  // schema: {
  //   value: {default: "TECHNOLOGY, ART, PHILOSOPHY, GEOGRAPHY, PLAYFULNESS, WITCHERY", type: "array"},
  // },

    update: function (newData) {
      const password = ["TECHNOLOGY", "ART", "PHILOSOPHY", "GEOGRAPHY", "PLAYFULNESS", "WITCHERY"]
      var data = this.data;
      var el = this.el;
      console.log("EL attribute value: ", el.getAttribute('text').value)
      console.log("Data: ", data)
      console.log("newData: ", newData)


      el.addEventListener('click', function (event) {
        if (el.getAttribute('text').value === "CODEBOX") {
          el.setAttribute("value", password[0])
        } else if (el.getAttribute('text').value === "TECHNOLOGY") {
          el.setAttribute("value", password[1])
        } else if (el.getAttribute('text').value === "ART") {
          el.setAttribute("value", password[2])
        } else if (el.getAttribute('text').value === "PHILOSOPHY") {
          el.setAttribute("value", password[3])
        } else if (el.getAttribute('text').value === "GEOGRAPHY") {
          el.setAttribute("value", password[4])
        } else if (el.getAttribute('text').value === "PLAYFULNESS") {
          el.setAttribute("value", password[5])
        } else if (el.getAttribute('text').value === "WITCHERY") {
          el.setAttribute("value", password[0])
        } 
          // this.flushToDOM()
      })
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